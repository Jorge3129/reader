import {BOOK_SERVER_URL} from "../constants/api";
import {Book, BookDescription, DeepBook} from "../domain/entities/books";
import {httpClient} from "./http.client";

const MY_URL = BOOK_SERVER_URL + '/books/'

export class BookApi {
    static async getBookById(id: string): Promise<DeepBook | undefined> {
        try {
            const res = await httpClient.get<Book>(MY_URL + id)
            return res.data
        } catch (e) {
            return undefined;
        }
    }

    static async getBookDescriptions(params?: Object): Promise<BookDescription[]> {
        try {
            const res = await httpClient
                .get<BookDescription[]>(MY_URL + 'descriptions', {params})
            return res.data
        } catch (e) {
            return []
        }
    }

    static async getNumOfPages(params?: Object): Promise<number | undefined> {
        try {
            const res = await httpClient
                .get<{ pages: number }>(MY_URL + 'descriptions/pages', {params})
            return res.data?.pages
        } catch (e) {
            return undefined
        }
    }

    static async getSection(id: string): Promise<DeepBook | undefined> {
        try {
            const res = await httpClient.get<Book>(MY_URL + id)
            return res.data
        } catch (e) {
            return undefined;
        }
    }
}
