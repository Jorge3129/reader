import {MongoDBFactory} from "./mongo/mongo.db.service";
import {IDBService, IDBServiceFactory} from "./db.types";
import {mockOdes} from "../scrape/mocks/mock-odes";
import {mockOdes2} from "../scrape/mocks/mock-odes-2";
import {formatOdes} from "../scrape/mocks/horace";
import {formatLucr} from "../scrape/mocks/lucr";
import {mockBookList} from "../scrape/mocks/mockBookList";
import {formatBook} from "../utils/book/book.format.utils";

export const DBFactory: IDBServiceFactory = new MongoDBFactory();
export const initBooks = async (DBService: IDBService) => {
    await DBService.books.deleteAll()
    // // await DBService.books.insertOne(formatBook(lucrBooks[0]))
    // // const book = await DBService.books.findOne({_id: new ObjectId('628de131c080bd0184ffea1b')})
    await DBService.books.insertOne(formatLucr)
    await DBService.books.insertOne(formatOdes)
    await DBService.books.insertOne(formatBook(mockOdes))
    await DBService.books.insertOne(formatBook(mockOdes2))
    for (let i = 1; i < 10; i++) {
        mockBookList.map(b => ({...b, content: mockOdes2.content, title: b.title + (i === 1 ? '' : i)}))
            .forEach(async b => {
                await DBService.books.insertOne(b)
            })
    }
}