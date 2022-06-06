import {Collection} from "mongodb";
import {Book} from "../../models/book/book";
import {User} from "../../models/user";
import {Token} from "../../models/token";
import {Word} from "../../models/word";
import {UserData} from "../../models/user.data";

export interface ICollections {
    books: Collection<Book>,
    users: Collection<User>
    tokens: Collection<Token>
    words: Collection<Word>
    userData: Collection<UserData>
}