import {ObjectId} from "mongodb";
import {collections} from "./database.service";

export class BookService {
     static async findOneBook(id: string) {
        const query = { _id: new ObjectId(id) };
        // @ts-ignore
        return await collections.books.findOne(query)
    }

    static async findAllBooks() {
        // @ts-ignore
        return await collections.books.find({}).toArray()
    }

    static async findAllBookDescriptions() {
        // @ts-ignore
        return await collections.books.find({}).project({content: 0}).toArray()
    }
}