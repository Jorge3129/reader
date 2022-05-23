import {Request, Response, NextFunction} from "express";
import {IUserRepo} from "../db/db.types";
import {User} from "../models/user";
import {UserService} from "../services/user.service";

export class UserController {

    constructor(public userRepo: IUserRepo, public userService: UserService) {}

    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const reqUser: User = req.body;
            const userData = await this.userService.register(reqUser);
            res.cookie('refreshToken', userData.refreshToken,
                {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body;
            const userData = await this.userService.login({email, password});
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e)
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const token = await this.userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e)
        }
    }

    async activate(req: Request, res: Response, next: NextFunction) {
        try {
            const activationLink = req.params.link;
            await this.userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL || "/");
        } catch (e) {
            next(e);
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await this.userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }
}