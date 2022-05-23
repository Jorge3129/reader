import {ITokenRepo} from "../db.types";
import {ICollections} from "./types";
import {Token} from "../../models/token";
import {DeleteResult, InsertOneResult} from "mongodb";


export class MongoTokenRepo implements ITokenRepo {

    constructor(private collections: ICollections) {}

    async findOne(filter: Partial<Token>): Promise<Token | null> {
        return await this.collections.tokens.findOne(filter) as Token | null;
    }

    async insertOne(token: Token): Promise<InsertOneResult<Token>> {
        return await this.collections.tokens.insertOne(token);
    }
    
    async updateOne(filter: Partial<Token>, update: Partial<Token>): Promise<any> {
        return this.collections.tokens.updateOne(filter, update);
    }

    async deleteOne(filter: Partial<Token>): Promise<DeleteResult> {
        return this.collections.tokens.deleteOne(filter);
    }

    async create(item: Token): Promise<Token> {
        const result = await this.insertOne(item);
        return {...item, _id: result.insertedId};
    }
}