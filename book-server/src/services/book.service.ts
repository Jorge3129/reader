import {IBookRepo} from "../db/db.types";
import {Query} from 'express-serve-static-core'
import {SplitTextSection} from "../models/book/book";
import {textToParagraphs} from "../utils/text/functions";
import {computeNumberOfPages, filterBooks, paginate} from "../utils/book/book.page.utils";

export class BookService {

    constructor(private bookRepo: IBookRepo) {
    }

    async getBooksByQuery(query: Query) {
        const books = await this.bookRepo.getAllDescriptions()
        const filtered = filterBooks(books, query)
        return paginate(filtered, query).map(b => ({...b, id: b._id}))
    }

    async getBooksAndNumOfPages(query: Query) {
        const books = await this.bookRepo.getAllDescriptions()
        const filtered = filterBooks(books, query)
        return {
            books: paginate(filtered, query).map(b => ({...b, id: b._id})),
            pages: computeNumberOfPages(filtered, query)
        }
    }

    async getNumberOfPages(query: Query) {
        const books = await this.bookRepo.getAllDescriptions()
        const filtered = filterBooks(books, query)
        return computeNumberOfPages(filtered, query)
    }

    async getSplitSection(bookId: string, sectionId: string): Promise<SplitTextSection> {
        const section = await this.bookRepo.getSection(bookId, sectionId);
        const paragraphs = textToParagraphs(section.textContent)
        return {...section, paragraphs, textContent: undefined}
    }
}