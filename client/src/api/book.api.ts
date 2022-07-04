import {BOOK_SERVER_URL} from "../constants/api";
import {Book, BookDescription, DeepBook, PartialBook, SplitTextSection} from "../models/book/books";
import {httpClient} from "./http.client";

const MY_URL = BOOK_SERVER_URL + '/books'

export interface BookResponse {
    books: BookDescription[]
    pages?: number
}

export class BookApi {
    static async getBookById(id: string): Promise<DeepBook | undefined> {
        try {
            const res = await httpClient.get<Book>(`${MY_URL}/${id}`)
            return res.data
        } catch (e) {
            return undefined;
        }
    }

    static async getBookDescriptions(params?: Object): Promise<BookResponse> {
        try {
            const res = await httpClient
                .get<BookResponse>(MY_URL + '/descriptions', {params})
            return res.data
        } catch (e) {
            return {books: []}
        }
    }

    static async getSection(bookId: string, sectionId: number): Promise<SplitTextSection | undefined> {
        try {
            const res = await httpClient.get<SplitTextSection>(`${MY_URL}/${bookId}/${sectionId}`)
            return res.data
        } catch (e) {
            return undefined;
        }
    }
}
