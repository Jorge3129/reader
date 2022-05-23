import {Book, PartialBook} from "../models/book";
import {User} from "../models/user";
import {Token} from "../models/token";
import {DeleteResult, Document, InsertOneResult, UpdateOneModel, UpdateResult} from "mongodb";

export interface IDBService {
    books: IBookRepo
    users: IUserRepo
    tokens: ITokenRepo
}

export interface IDBServiceFactory {
    connect: () => Promise<IDBService>
}

export interface IRepo<T extends Document> {
    findOne: (filter: Partial<T>) => Promise<T | null>
    insertOne: (item: T) => Promise<InsertOneResult<T>>
    updateOne?: (filter: Partial<T>, update: Partial<T>) => Promise<UpdateResult | null>
    deleteOne?: (filter: Partial<T>) => Promise<DeleteResult | null>
    create: (item: T) => Promise<T>
}

export type IBookRepo = {
    getOne: (id: string) => Promise<Book | null>
    getAll: () => Promise<Book[]>
    deleteAll: () => Promise<any>
    getAllDescriptions: () => Promise<PartialBook[]>
    insertOne: (item: Book) => Promise<InsertOneResult<Book>>
}

export type IUserRepo = IRepo<User> & {
    getOneById: (id: string) => Promise<User | null>
    getOneByEmail: (email: string) => Promise<User | null>
    exists: (user: User) => Promise<boolean>
    updateOne: (filter: Partial<User>, update: Partial<User>) => Promise<UpdateResult | null>
}

export interface ITokenRepo extends IRepo<Token> {
    updateOne: (filter: Partial<Token>, update: Partial<Token>) => Promise<UpdateResult | null>
    deleteOne: (filter: Partial<Token>) => Promise<DeleteResult | null>

}