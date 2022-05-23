import {IUserRepo} from "../db/db.types";
import {User} from "../models/user";
import argon2 from "argon2";
import {Null} from "../models/type.utils";
import {ApiError} from "../exceptions/api-error";
import {UserDto} from "../dtos/user.dto";
import mailService from './mail.service'

const uuid = require('uuid')

export class UserService {

    constructor(public userRepo: IUserRepo, public tokenService: any) {
    }

    async register(reqUser: User) {
        if (await this.userRepo.exists(reqUser))
            throw ApiError.BadRequest(`User with email ${reqUser.email} already exists`)
        const hashed = await argon2.hash(reqUser.password)
        const activationLink = uuid.v4(); // v34fa-asfasf-142saf-sa-asf

        const user = await this.userRepo.create({email: reqUser.email, password: hashed, activationLink})
        //await mailService.sendActivationMail(reqUser.email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user); // id, email, isActivated
        const tokens = this.tokenService.generateTokens({...userDto});
        await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }

    async login({email, password}: Pick<User, "email" | "password">) {
        const user: Null<User> = await this.userRepo.getOneByEmail(email);
        if (!user) throw ApiError.BadRequest(`No user with email ${email}`);
        // verify password
        const isValid = await argon2.verify(user.password, password)
        if (!isValid) throw ApiError.BadRequest(`Incorrect password`);
        // generate tokens
        const userDto = new UserDto(user);
        const tokens = this.tokenService.generateTokens({...userDto});
        await this.tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }


    async activate(activationLink: string) {
        const user = await this.userRepo.findOne({activationLink})
        if (!user) {
            throw ApiError.BadRequest('Incorrect link')
        }
        await this.userRepo.updateOne({_id: user._id}, {isActivated: true});
    }

    async refresh(refreshToken: string) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = this.tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await this.tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await this.userRepo.findOne({_id: userData.id});
        if (!user) throw new Error('Server error: no user by id')
        const userDto = new UserDto(user);
        const tokens = this.tokenService.generateTokens({...userDto});
        await this.tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async logout(refreshToken: string) {
        return await this.tokenService.removeToken(refreshToken);
    }
}