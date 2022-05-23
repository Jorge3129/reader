// import {IBookRepo, IRepo} from "../db.types";
// import {Collection, DeleteResult, Document, Filter, InsertOneResult, UpdateResult} from "mongodb";
//
// export class MongoRepo<T extends Document> implements IRepo<T> {
//
//     constructor(private collection: Collection<T>) {
//     }
//
//     async create(item: T): Promise<T> {
//         const result = await this.insertOne(item);
//         return {...item, _id: result.insertedId};
//     }
//
//     async deleteOne(filter: Partial<T>): Promise<DeleteResult | null> {
//         return await this.collection.deleteOne(filter);
//     }
//
//     async updateOne(filter: Partial<T>, update: Partial<T>): Promise<UpdateResult | null> {
//         return this.collection.updateOne(filter, update);
//     }
//
//     async findOne(filter: Partial<T>): Promise<T | null> {
//         return await this.collection.findOne(filter) as T | null;
//     }
//
//     async insertOne(item: T): Promise<InsertOneResult<T>> {
//         return await this.collection.insertOne(item);
//     }
//
// }