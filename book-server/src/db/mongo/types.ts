import {Collection} from "mongodb";
import {Book} from "../../models/book";
import {User} from "../../models/user";
import {Token} from "../../models/token";

export interface ICollections {
    books: Collection<Book>,
    users: Collection<User>
    tokens: Collection<Token>
}