import {DeleteResult, InsertOneResult, ObjectId, UpdateResult} from "mongodb";
import {User} from "../../models/user";
import {ICollections} from "./types";
import {IUserRepo} from "../db.types";

export class MongoUserRepo implements IUserRepo {

    constructor(private collections: ICollections) {
    }

    async getOneById(id: string): Promise<User | null> {
        const query = {_id: new ObjectId(id)};
        return await this.collections.users.findOne(query) as User | null
    }

    async getOneByEmail(email: string): Promise<User | null> {
        return await this.collections.users.findOne({email}) as User | null
    }

    async insertOne(user: User): Promise<InsertOneResult<User>> {
        return await this.collections.users.insertOne(user);
    }

    async updateOne(filter: Partial<User>, update: Partial<User>): Promise<UpdateResult | null> {
        return await this.collections.users.updateOne(filter, update);
    }

    async exists(user: User): Promise<boolean> {
        return Boolean(await this.getOneByEmail(user.email));
    }

    async findOne(filter: Partial<User>): Promise<User | null> {
        return await this.collections.users.findOne(filter) as User | null;
    }

    async create(item: User): Promise<User> {
        const result = await this.insertOne(item);
        return {...item, _id: result.insertedId};
    }
}
