import {NextFunction, Request, Response} from "express";
import {IBookRepo} from "../db/db.types";
import {BookService} from "../services/book.service";

export class BookController {

    constructor(private bookRepo: IBookRepo,  private bookService: BookService) {}

    async getBookById(req: Request, res: Response) {
        try {
            const id = req.params?.id;
            const book = await this.bookRepo.getOne(id);
            if (book) res.status(200).json(book);
        } catch (error) {
            res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
        }
    }

    async getAllBooks(req: Request, res: Response) {
        try {
            const books = await this.bookRepo.getAll()
            res.status(200).send(books);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    async getBookDescriptions(req: Request, res: Response) {
        try {
            const books = await this.bookService.getBooksByQuery(req.query)
            res.status(200).send(books.map(b => ({...b, id: b._id})));
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }


    async getNumberOfPages(req: Request, res: Response) {
        try {
            const pages = await this.bookService.getNumberOfPages(req.query)
            res.status(200).json({pages});
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }
    async getSection(req: Request, res: Response, next: NextFunction) {
        try {
            const {bookId, sectionId} = req.params;
            const section = await this.bookRepo.getSection(bookId, sectionId);
            res.status(200).send(section);
        } catch (e) {
            next(e)
        }
    }
}