import {Request, Response} from "express";
import argon2 from "argon2";
import {IUserRepo} from "../db/db.types";
import {User} from "../models/user";
import {Null} from "../models/type.utils";

export class UserController {

    constructor(public userService: IUserRepo) {}

    async register(req: Request, res: Response) {
        try {
            console.log("REGISTER")
            const reqUser: User = req.body;
            // check if exists
            if (await this.userService.exists(reqUser))
                return res.status(404).send({message: `User with email ${reqUser.email} already exists`});
            // hash password
            const hashed = await argon2.hash(reqUser.password)
            const result = await this.userService.insertOne({...reqUser, password: hashed});
            res.status(200).json({success: true, result})
        } catch (error) {
            console.log(error)
            res.status(404).json({message: `Unable to find matching document with id: ${req.params.id}`});
        }
    }

    async login(req: Request, res: Response) {
        try {
            console.log("LOGIN")
            const {loginUser} = req.body;
            if (!loginUser) throw new Error()
            const {email, password} = loginUser;
            const user: Null<User> = await this.userService.getOneByEmail(email);
            // email doesn't exist
            if (!user) return res.status(404).send({message: `No user with email ${email}`});
            // verify password
            if (await argon2.verify(user.password, password)) {
                res.json({success: true, user: {user, password: undefined}})
            } else {
                res.status(404).json({message: "Incorrect password"})
            }
        } catch (error) {
            console.log(error)
            res.status(404).json({message: `Unable to find matching document with id: ${req.params.id}`});
        }
    }

    async logout(req: Request, res: Response) {
        try {

        } catch (error) {
            res.status(404).json({message: `Unable to find matching document with id: ${req.params.id}`});
        }
    }
}