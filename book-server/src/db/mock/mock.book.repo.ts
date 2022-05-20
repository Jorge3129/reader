import {IBookRepo} from "../db.types";
import {Book, PartialBook} from "../../models/book";

export class MockBookRepo implements IBookRepo {
    deleteAll(): Promise<void> {
        return Promise.resolve(undefined);
    }

    getAll(): Promise<Book[]> {
        return Promise.resolve([]);
    }

    getAllDescriptions(): Promise<PartialBook[]> {
        return Promise.resolve([]);
    }

    getOne(id: string): Promise<Book | null> {
        return Promise.resolve(null);
    }

    insertOne(book: Book): Promise<void> {
        return Promise.resolve(undefined);
    }
}