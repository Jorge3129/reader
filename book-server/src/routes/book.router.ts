import express from "express";
import {BookController} from "../controllers/book.controller";
import {IDBService} from "../db/db.types";

export const getBookRouter = (db: IDBService) => {
    const bookRouter = express.Router();
    const controller = new BookController(db.books)
    bookRouter.get('/', controller.getAllBooks.bind(controller))
    bookRouter.get('/descriptions', controller.getBookDescriptions.bind(controller))
    bookRouter.get('/:id', controller.getBookById.bind(controller))
    return bookRouter;
}

