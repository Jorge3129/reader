import express from "express";
import {UserController} from "../controllers/user.controller";
import {IDBService} from "../db/db.types";
import {UserService} from "../services/user.service";
import {TokenService} from "../services/token.service";

export const getUserRouter = (db: IDBService) => {
    const userRouter = express.Router();
    const tokenService = new TokenService(db.tokens)
    const userService = new UserService(db.users, tokenService)
    const controller = new UserController(userService)

    userRouter.post('/register', controller.register.bind(controller))
    userRouter.post('/login', controller.login.bind(controller))
    userRouter.post('/logout', controller.logout.bind(controller))
    userRouter.get('/activate/:link', controller.activate.bind(controller))
    userRouter.get('/refresh', controller.refresh.bind(controller))
    return userRouter;
}