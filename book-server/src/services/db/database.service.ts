import {Collection, Db, MongoClient} from "mongodb";
import * as dotenv from "dotenv";
import path from "path";

export const collections: { books?: Collection } = {}

export async function connectToDatabase() {
    const envPath = (path.join(__dirname, "../../.env"))
    console.log(dotenv.config({path: envPath}))
    const client: MongoClient = new MongoClient(process.env.DB_CONN_STRING || "");
    await client.connect();
    const db: Db = client.db(process.env.DB_NAME);
    const bookCollection: Collection = db.collection(process.env.GAMES_COLLECTION_NAME || "");
    collections.books = bookCollection;
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${bookCollection.collectionName}`);
}