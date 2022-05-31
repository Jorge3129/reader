import express from "express";
import {BookController} from "../controllers/book.controller";
import {IDBService} from "../db/db.types";
import {BookService} from "../services/book.service";

export const getBookRouter = (db: IDBService) => {
    const bookRouter = express.Router();
    const bookService = new BookService(db.books)
    const controller = new BookController(db.books, bookService)
    bookRouter.get('/', controller.getAllBooks.bind(controller))
    bookRouter.get('/descriptions', controller.getBookDescriptions.bind(controller))
    bookRouter.get('/descriptions/pages', controller.getNumberOfPages.bind(controller))
    bookRouter.get('/:id', controller.getBookById.bind(controller))
    return bookRouter;
}

