import {ObjectId} from "mongodb";
import {User} from "../../models/user";
import {ICollections} from "./types";
import {IUserRepo} from "../db.types";

export class MongoUserRepo implements IUserRepo {

    constructor(private collections: ICollections) {}

    async getOneById(id: string): Promise<User | null> {
        const query = { _id: new ObjectId(id) };
        return await this.collections.users.findOne(query) as User | null
    }

    async getOneByEmail(email: string): Promise<User | null> {
        return await this.collections.users.findOne({email: email}) as User | null
    }

    async insertOne(user: User): Promise<any> {
        return await this.collections.users.insertOne(user);
    }

    async exists(user: User): Promise<boolean> {
        return Boolean(await this.getOneByEmail(user.email));
    }
}
