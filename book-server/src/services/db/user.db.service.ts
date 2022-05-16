import {ObjectId} from "mongodb";
import {collections} from "./database.service";
import {User} from "../../models/User";

class UserDbService {
    async findOneById(id: string) {
        const query = { _id: new ObjectId(id) };
        // @ts-ignore
        return await collections.users.findOne(query)
    }

    async findOneByEmail(email: string) {
        // @ts-ignore
        return await collections.users.findOne({email: email})
    }

    async insertOne(user: User) {
        // @ts-ignore
        return await collections.users.findOne({email: email})
    }

    async exists(user: User) {
        return Boolean(await this.findOneByEmail(user.email));
    }
}

export default new UserDbService()