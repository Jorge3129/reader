import {PartialBook} from "../../models/book/book";
import {Query} from "express-serve-static-core";
import {bookKeys, bookKeysList} from "../../constants/bookKeys";

export const computeNumberOfPages = (books: PartialBook[], query: Query) => {
    const {length} = books
    const {sizeNum} = parseSizeAndPage(query)
    return sizeNum ? Math.ceil(length / sizeNum) : 1
}

export const filterBooks = (books: PartialBook[], query: Query): PartialBook[] => {
    return books.filter(book => bookKeysList
        .reduce((acc: boolean, key: string) => {
            const match = !query[key] || matchQueryToBook(key, query, book)
            return acc && match
        }, true)
    )
}

export const paginate = (books: PartialBook[], query: Query): PartialBook[] => {
    const {pageNum, sizeNum} = parseSizeAndPage(query);
    if (!sizeNum) return books;
    return books.slice((pageNum - 1) * sizeNum, pageNum * sizeNum)
}

export const parseSizeAndPage = (query: Query) => {
    const {size, page} = query;
    const pageNum = parseInt(page + '') || 1;
    const sizeNum = parseInt(size + '');
    return {pageNum, sizeNum}
}

export const matchQueryToBook = (key: string, query: Query, book: PartialBook): boolean => {
    return key === bookKeys.genre ?
        !!book.genre?.includes(query[key] + '')
        : query[key] === book[key]
}