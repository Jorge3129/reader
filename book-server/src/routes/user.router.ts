import express from "express";
import {UserController} from "../controllers/user.controller";
export const userRouter = express.Router();

userRouter.get('/login', UserController.login)
userRouter.get('/register', UserController.register)