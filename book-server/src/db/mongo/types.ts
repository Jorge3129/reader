import {Collection} from "mongodb";
import {Book} from "../../models/book";
import {User} from "../../models/user";

export interface ICollections {
    books: Collection<Book>,
    users: Collection<User>
}