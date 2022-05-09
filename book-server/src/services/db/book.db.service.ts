import {ObjectId} from "mongodb";
import {collections} from "./database.service";

class BookDbService {
    async findOneBook(id: string) {
        const query = { _id: new ObjectId(id) };
        // @ts-ignore
        return await collections.books.findOne(query)
    }

    async findAllBooks() {
        // @ts-ignore
        return await collections.books.find({}).toArray()
    }

    async findAllBookDescriptions() {
        // @ts-ignore
        return await collections.books.find({}).project({content: 0}).toArray()
    }
}

export default new BookDbService()