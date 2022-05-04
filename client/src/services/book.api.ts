import axios from 'axios'
import {BOOK_SERVER_URL} from "./config";
import {Book, BookDescription} from "../domain/entities/books";

const MY_URL = BOOK_SERVER_URL

export class BookApi {
    static async getBookById(id: string): Promise<Book | undefined> {
        try {
            const res = await axios.get<Book>(MY_URL + '/books/' + id)
            return res.data
        } catch (e) {
            return undefined;
        }
    }

    static async getBookDescriptions(): Promise<BookDescription[]> {
        try {
            const res = await axios.get<BookDescription[]>(MY_URL + '/books/descriptions')
            return res.data
        } catch (e) {
            return []
        }
    }

    static async getSection(id: string): Promise<Book | undefined> {
        try {
            const res = await axios.get<Book>(MY_URL + '/books/' + id)
            return res.data
        } catch (e) {
            return undefined;
        }
    }
}
