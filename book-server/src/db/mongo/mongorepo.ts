import {IRepo} from "../db.types";
import {
    Collection,
    DeleteResult,
    Document,
    Filter,
    InsertOneResult,
    OptionalUnlessRequiredId,
    UpdateResult
} from "mongodb";

export class MongoRepo<T extends Document> implements IRepo<T> {

    constructor(private collection: Collection<T>) {
    }

    async create(item: T): Promise<T> {
        const result = await this.insertOne(item);
        return {...item, _id: result.insertedId};
    }

    async deleteOne(filter: Filter<T>): Promise<DeleteResult | null> {
        return await this.collection.deleteOne(filter);
    }

    async updateOne(filter: Filter<T>, update: Partial<T>): Promise<UpdateResult | null> {
        return this.collection.updateOne(filter, {"$set": update});
    }

    async findOne(filter: Filter<T>): Promise<T | null> {
        return await this.collection.findOne(filter, {}) as T | null;
    }

    async insertOne(item: T): Promise<InsertOneResult<T>> {
        return await this.collection.insertOne(item as OptionalUnlessRequiredId<T>, {});
    }

}