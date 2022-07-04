import {ICollections} from "./types";
import {MongoRepo} from "./mongorepo";
import {UserData} from "../../models/user.data";
import {IUserDataRepo} from "../db.types";
import {Word} from "../../models/word";
import {ObjectId} from "mongodb";
import {PartialBook} from "../../models/book/book";

export class MongoUserDataRepo extends MongoRepo<UserData> implements IUserDataRepo {
    constructor(public collections: ICollections) {
        super(collections.userData);
    }

    async getWords(userId: string): Promise<Word[]> {
        const userData = await this.collections.userData.findOne({userId: new ObjectId(userId)});
        if (!userData) return []
        return await this.collections.words.find({"id": {$in: userData.words}}).toArray();
    }

    async getRecentBooks(userId: string): Promise<PartialBook[]> {
        const userData = await this.collections.userData.findOne({userId: new ObjectId(userId)});
        if (!userData) return []
        const res = await this.collections.books
            .find({"_id": {$in: userData.recentBooks}})
            .project({content: 0})
            .toArray()
        return res.map(b => ({...b, id: b._id})) as PartialBook[]
    }
}