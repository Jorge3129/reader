import {IUserRepo} from "../db.types";
import {User} from "../../models/user";
import {Null} from  "../../models/type.utils"

export class MockUserRepo implements IUserRepo {
    exists(user: User): Promise<boolean> {
        return Promise.resolve(false);
    }

    getOneByEmail(email: string): Promise<Null<User>> {
        return Promise.resolve(null);
    }

    getOneById(id: string): Promise<Null<User>> {
        return Promise.resolve(null);
    }

    insertOne(user: User): Promise<any> {
        return Promise.resolve(undefined);
    }

}