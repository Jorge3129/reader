import {ITokenRepo} from "../db/db.types";
import {ObjectId} from "mongodb";

const jwt = require('jsonwebtoken');

export class TokenService {

    constructor(public tokenRepo: ITokenRepo) {
    }

    generateTokens(payload: any) {
        console.log(process.env.JWT_ACCESS_SECRET)
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '2000s'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30s'})
        return {accessToken, refreshToken}
    }

    validateAccessToken(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId: ObjectId, refreshToken: string) {
        const tokenData = await this.tokenRepo.findOne({user: userId})
        if (tokenData) {
            await this.tokenRepo.updateOne({_id: tokenData._id}, {refreshToken})
            return {...tokenData, refreshToken};
        }
        return await this.tokenRepo.create({user: userId, refreshToken});
    }

    async removeToken(refreshToken: string) {
        return await this.tokenRepo.deleteOne({refreshToken});
    }

    async findToken(refreshToken: string) {
        return await this.tokenRepo.findOne({refreshToken});
    }
}