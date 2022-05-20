import {IDBService} from "../db/db.types";
import express from "express";
import {getBookRouter} from "./book.router";
import {getUserRouter} from "./user.router";

export class RootRouter {
    private static router: express.Router;

    static getRouter(dbService: IDBService) {
        console.log(dbService)
        if (!this.router) {
            this.router = express.Router();
            this.router.use('/books', getBookRouter(dbService))
            this.router.use('/auth', getUserRouter(dbService))
        }
        return this.router;
    }
}