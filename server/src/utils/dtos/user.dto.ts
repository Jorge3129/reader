import {User} from "../../models/user";
import {ObjectId} from "mongodb";

export class UserDto {
    email: string;
    id: ObjectId;
    isActivated: boolean | undefined;

    constructor(model: User) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
}