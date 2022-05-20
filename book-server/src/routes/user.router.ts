import express from "express";
import {UserController} from "../controllers/user.controller";
import {IDBService} from "../db/db.types";

export const getUserRouter = (db: IDBService) => {
    const userRouter = express.Router();
    const controller = new UserController(db.users)
    userRouter.post('/login', controller.login.bind(controller))
    userRouter.post('/register', controller.register.bind(controller))
    return userRouter;
}