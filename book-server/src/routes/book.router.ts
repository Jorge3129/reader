import express from "express";
import {BookController} from "../controllers/book.controller";
export const bookRouter = express.Router();

bookRouter.get('/', BookController.getAllBooks)
bookRouter.get('/descriptions', BookController.getBookDescriptions)
bookRouter.get('/:id', BookController.getBookById)