import {MongoDBFactory} from "./mongo/mongo.db.service";
import {IDBService, IDBServiceFactory} from "./db.types";
import {formatBook} from "../models/book.utils";

export const DBFactory: IDBServiceFactory = new MongoDBFactory();
export const initBooks = async (DBService: IDBService) => {
    // await DBService.books.deleteAll()
    //await DBService.books.insertOne(formatBook(lucrBooks[0]))
}