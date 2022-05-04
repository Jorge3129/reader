import {Request, Response} from "express";
import {BookService} from "../services/book.service";

export class BookController {

    static async getBookById(req: Request, res: Response) {
        const id = req.params?.id;
        try {
            const book = await BookService.findOneBook(id);
            if (book) res.status(200).json(book);
        } catch (error) {
            res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
        }
    }

    static async getAllBooks(_req: Request, res: Response) {
        try {
            const books = await BookService.findAllBooks()
            res.status(200).send(books);
        } catch (error) {
            // @ts-ignore
            res.status(500).send(error.message);
        }
    }

    static async getBookDescriptions(_req: Request, res: Response) {
        try {
            const books = await BookService.findAllBookDescriptions()
            res.status(200).send(books.map(b => ({...b, id: b._id})));
        } catch (error) {
            // @ts-ignore
            res.status(500).send(error.message)
        }
    }

}