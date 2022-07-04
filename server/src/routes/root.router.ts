import {IDBService} from "../db/db.types";
import express from "express";
import {getBookRouter} from "./book.router";
import {getUserRouter} from "./user.router";
import {getUserDataRouter} from "./user.data.router";
import langController from "../controllers/lang.controller";

export class RootRouter {
    private static router: express.Router;

    static getRouter(dbService: IDBService) {
        if (!this.router) {
            this.router = express.Router();
            this.router.use('/books', getBookRouter(dbService))
            this.router.use('/auth', getUserRouter(dbService))
            this.router.use('/tools', getUserDataRouter(dbService))
            this.router.get('/lang/word/:word', langController.getTranslation.bind(langController))

        }
        return this.router;
    }
}