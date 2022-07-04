import {ObjectId, W} from "mongodb";
import {User} from "../../models/user";
import {ICollections} from "./types";
import {IUserRepo} from "../db.types";
import {MongoRepo} from "./mongorepo";
import {Word} from "../../models/word";

export class MongoUserRepo extends MongoRepo<User> implements IUserRepo {

    constructor(private collections: ICollections) {
        super(collections.users)
    }

    async getOneById(id: string): Promise<User | null> {
        const query = {_id: new ObjectId(id)};
        return await this.collections.users.findOne(query) as User | null
    }

    async getOneByEmail(email: string): Promise<User | null> {
        return await this.collections.users.findOne({email}) as User | null
    }

    async exists(user: User): Promise<boolean> {
        return Boolean(await this.getOneByEmail(user.email));
    }
}
