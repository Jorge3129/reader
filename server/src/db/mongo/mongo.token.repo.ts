import {ITokenRepo} from "../db.types";
import {ICollections} from "./types";
import {Token} from "../../models/token";
import {MongoRepo} from "./mongorepo";


export class MongoTokenRepo extends MongoRepo<Token> implements ITokenRepo {

    constructor(private collections: ICollections) {
        super(collections.tokens)
    }

    async findOne(filter: Partial<Token>): Promise<Token | null> {
        // console.log(await this.collections.tokens.find({}).toArray())
        // try{ throw  new Error("Location")} catch (e) {
        //     console.log(e)}
        console.log('FILTER')
        console.log(filter)
        return await this.collections.tokens.findOne(filter) as Token | null;
    }
}