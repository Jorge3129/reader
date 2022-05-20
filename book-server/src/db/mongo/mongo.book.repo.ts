import {ObjectId} from "mongodb";
import {Book, PartialBook} from "../../models/book";
import {IBookRepo} from "../db.types";
import {ICollections} from "./types";

export class MongoBookRepo implements IBookRepo {

    constructor(private collections: ICollections) {}

    async getOne(id: string): Promise<Book | null> {
        const query = { _id: new ObjectId(id) };
        return await this.collections.books.findOne(query) as Book | null
    }

    async getAll(): Promise<Book[]> {
        return await this.collections.books.find({}).toArray() as Book []
    }

    async getAllDescriptions(): Promise<PartialBook[]> {
        return await this.collections.books.find({}).project({content: 0}).toArray() as PartialBook[]
    }

    deleteAll(): Promise<any> {
        return this.collections.books.deleteMany({});
    }

    insertOne(book: Book): Promise<any> {
        return this.collections.books.insertOne(book);
    }
}