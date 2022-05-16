import {Request, Response} from "express";
import argon2 from "argon2";
import UserDbService from "../services/db/user.db.service";

export class UserController {

    static async login(req: Request, res: Response) {
        try {
            const {email, password} = req.body.user;
            const user = await UserDbService.findOneByEmail(email);
            if (!user) return res.status(404).send({msg: `No user with email ${email}`});
            if (await argon2.verify(user.password, password)) {
                res.json({success: true})
            } else {
                res.status(404).json({msg: "Incorrect password"})
            }
        } catch (error) {
            res.status(404).send({msg: `Unable to find matching document with id: ${req.params.id}`});
        }
    }

    static async register(req: Request, res: Response) {
        try {
            const reqUser = req.body.user;
            // check if exists
            if (await UserDbService.exists(reqUser))
               return res.status(404).send(`User with email ${reqUser.email} already exists`);
            // hash password
            const hashed = await argon2.hash(reqUser.password)
            const result = await UserDbService.insertOne({...reqUser, password: hashed});
            res.status(200).json({success: true, result})
        } catch (error) {
            res.status(404).send({msg: `Unable to find matching document with id: ${req.params.id}`});
        }
    }
}