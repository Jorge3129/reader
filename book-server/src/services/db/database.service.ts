import {Collection, Db, MongoClient} from "mongodb";
import * as dotenv from "dotenv";
import path from "path";

export const collections: { books?: Collection, users?: Collection } = {}

export async function connectToDatabase() {
    const envPath = (path.join(__dirname, "../../.env"))
    console.log(dotenv.config({path: envPath}))
    const client: MongoClient = new MongoClient(process.env.DB_CONN_STRING || "");
    await client.connect();
    const db: Db = client.db(process.env.DB_NAME);
    const books: Collection = db.collection(process.env.BOOK_COLLECTION || "");
    const users: Collection = db.collection(process.env.BOOK_COLLECTION || "");
    collections.books = books
    collections.users = users
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${books.collectionName}`);
}