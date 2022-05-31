import {IBookRepo} from "../db/db.types";
import {Query} from 'express-serve-static-core'
import {PartialBook} from "../models/book";
import {bookKeys, bookKeysList} from "../constants/bookKeys";

export class BookService {

    constructor(private bookRepo: IBookRepo) {
    }

    async getBooksByQuery(query: Query) {
        const books = await this.bookRepo.getAllDescriptions()
        const filtered = BookService.filterBooks(books, query)
        return BookService.paginate(filtered, query)
    }

    async getNumberOfPages(query: Query) {
        const books = await this.bookRepo.getAllDescriptions()
        const length = BookService.filterBooks(books, query).length
        const {sizeNum} = BookService.parseSizeAndPage(query)
        return sizeNum ? Math.ceil(length / sizeNum) : 1
    }

    private static filterBooks(books: PartialBook[], query: Query) {
        return books.filter(book => bookKeysList
            .reduce((acc: boolean, key: string) => {
                const match = !query[key] || BookService.matchQueryToBook(key, query, book)
                return acc && match
            }, true)
        )
    }

    private static paginate(books: PartialBook[], query: Query) {
        const {pageNum, sizeNum} = BookService.parseSizeAndPage(query);
        if (!sizeNum) return books;
        return books.slice((pageNum - 1) * sizeNum, pageNum * sizeNum)
    }

    private static parseSizeAndPage(query: Query) {
        const {size, page} = query;
        const pageNum = parseInt(page + '') || 1;
        const sizeNum = parseInt(size + '');
        return {pageNum, sizeNum}
    }

    private static matchQueryToBook(key: string, query: Query, book: PartialBook): boolean {
        return key === bookKeys.genre ?
            !!book.genre?.includes(query[key] + '')
            : query[key] === book[key]
    }
}