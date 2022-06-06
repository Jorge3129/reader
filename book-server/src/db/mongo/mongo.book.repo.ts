import {ObjectId} from "mongodb";
import {Book, ContainerSection, TextSection, PartialBook} from "../../models/book/book";
import {IBookRepo} from "../db.types";
import {ICollections} from "./types";
import {MongoRepo} from "./mongorepo";
import {ApiError} from "../../exceptions/api-error";
import {flattenBookContent} from "../../utils/book/book.format.utils";

export class MongoBookRepo extends MongoRepo<Book> implements IBookRepo {

    constructor(private collections: ICollections) {
        super(collections.books)
    }

    async getOne(id: string): Promise<Book | null> {
        const query = {_id: new ObjectId(id)};
        return await this.collections.books.findOne(query) as Book | null
    }

    async getAll(): Promise<Book[]> {
        return await this.collections.books.find({}).toArray() as Book []
    }

    async getAllDescriptions(): Promise<PartialBook[]> {
        return await this.collections.books.find({})
            .project({content: 0}).toArray() as PartialBook[]
    }

    async getSection(bookId: string, sectionId: string): Promise<TextSection> {
        const numSectionId = parseInt(sectionId);
        if (isNaN(numSectionId)) throw ApiError.BadRequest(`Incorrect section id`)
        const book = await this.collections.books.findOne({_id: new ObjectId(bookId)})
        if (!book) throw ApiError.BadRequest(`No book with id ${bookId}`)
        const section = flattenBookContent(book.content)[numSectionId];
        if (!section) throw ApiError.BadRequest(`No section with id ${bookId}`)
        return section;
    }

    async deleteAll(): Promise<any> {
        return this.collections.books.deleteMany({});
    }
}