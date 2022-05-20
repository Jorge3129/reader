import {Request, Response} from "express";
import {IBookRepo} from "../db/db.types";

export class BookController {

    constructor(public bookService: IBookRepo) {
        console.log(bookService)
    }

    async getBookById(req: Request, res: Response) {
        const id = req.params?.id;
        try {
            const book = await this.bookService.getOne(id);
            if (book) res.status(200).json(book);
        } catch (error) {
            res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
        }
    }

    async getAllBooks(_req: Request, res: Response) {
        try {
            const books = await this.bookService.getAll()
            res.status(200).send(books);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    async getBookDescriptions(_req: Request, res: Response) {
        try {
            const books = await this.bookService.getAllDescriptions()
            res.status(200).send(books.map(b => ({...b, id: b._id})));
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }
}