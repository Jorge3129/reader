import {Collection, Db, MongoClient} from "mongodb";
import * as dotenv from "dotenv";
import path from "path";
import {IBookRepo, IDBService, IDBServiceFactory, IUserRepo} from "../db.types";
import {Book} from "../../models/book";
import {MongoBookRepo} from "./mongo.book.repo";
import {User} from "../../models/user";
import {ICollections} from "./types";
import {MongoUserRepo} from "./mongo.user.repo";

export class MongoDBService implements IDBService {

    books: MongoBookRepo
    users: MongoUserRepo

    constructor(private collections: ICollections) {
        this.books = new MongoBookRepo(collections)
        this.users = new MongoUserRepo(collections)
    }
}

export class MongoDBFactory implements IDBServiceFactory{

    public async connect() {
        MongoDBFactory.configEnv();
        const client = await MongoDBFactory.initClient();
        const db: Db = client.db(process.env.DB_NAME);
        const collections = MongoDBFactory.createCollections(db);
        MongoDBFactory.logResult(db)
        return new MongoDBService(collections)
    }

    private static async initClient(): Promise<MongoClient> {
        const client: MongoClient = new MongoClient(process.env.DB_CONN_STRING || "");
        await client.connect();
        return client;
    }

    private static createCollections(db: Db) : ICollections {
        const books: Collection<Book> = db.collection(process.env.BOOK_COLLECTION || "");
        const users: Collection<User> = db.collection(process.env.USER_COLLECTION || "");
        return {books, users}
    }

    private static configEnv() {
        const envPath = (path.join(__dirname, "../../.env"))
        console.log(dotenv.config({path: envPath}))
    }

    private static logResult(db: Db) {
        console.log(`Successfully connected to database: ${db.databaseName}`);
    }
}