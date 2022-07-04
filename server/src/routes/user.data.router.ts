import {IDBService} from "../db/db.types";
import express from "express";
import {UserDataController} from "../controllers/user-data.controller";
import {UserDataService} from "../services/user.data.service";

export const getUserDataRouter = (db: IDBService) => {
    const router = express.Router();
    const service = new UserDataService(db)
    const controller = new UserDataController(service)
    router.get('/words/:userId', controller.getUserWords.bind(controller))
    router.post('/words/:userId', controller.addWord.bind(controller))
    router.delete('/words/:userId/:wordId', controller.deleteWord.bind(controller))
    router.get('/recent/:userId', controller.getRecentBooks.bind(controller))
    router.post('/recent/:userId', controller.addRecentBook.bind(controller))
    return router;
}