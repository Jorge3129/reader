import {Book, FlatBookSection, PartialBook} from "../models/book";
import {User} from "../models/user";
import {Token} from "../models/token";
import {DeleteResult, Document, Filter, InsertOneResult, ObjectId, UpdateOneModel, UpdateResult} from "mongodb";
import {Word} from "../models/word";
import {UserData} from "../models/user.data";

export interface IDBService {
    books: IBookRepo
    users: IUserRepo
    tokens: ITokenRepo
    words: IWordRepo
    userData: IUserDataRepo
}

export interface IDBServiceFactory {
    connect: () => Promise<IDBService>
}

export interface IRepo<T extends Document> {
    findOne: (filter: Filter<T>) => Promise<T | null>
    insertOne: (item: T) => Promise<InsertOneResult<T>>
    updateOne: (filter: Filter<T>, update: Partial<T>) => Promise<UpdateResult | null>
    deleteOne: (filter: Filter<T>) => Promise<DeleteResult | null>
    create: (item: T) => Promise<T>
}

export interface IBookRepo extends IRepo<Book>{
    getOne: (id: string) => Promise<Book | null>
    getAll: () => Promise<Book[]>
    deleteAll: () => Promise<any>
    getAllDescriptions: () => Promise<PartialBook[]>
    getSection: (bookId: string, sectionId: string) => Promise<FlatBookSection>
}

export interface IUserRepo extends IRepo<User>{
    getOneById: (id: string) => Promise<User | null>
    getOneByEmail: (email: string) => Promise<User | null>
    exists: (user: User) => Promise<boolean>
}

export interface ITokenRepo extends IRepo<Token> {}
export interface IWordRepo extends IRepo<Word> {}
export interface IUserDataRepo extends IRepo<UserData> {
    getWords: (userId: string) => Promise<Word[]>
    getRecentBooks: (userId: string) => Promise<PartialBook[]>
}