import {Book, PartialBook} from "../models/book";
import {User} from "../models/user";

export interface IDBService {
    books: IBookRepo
    users: IUserRepo
}

export interface IDBServiceFactory {
    connect: () => Promise<IDBService>
}

export interface IBookRepo {
    getOne: (id: string) => Promise<Book | null>
    getAll: () => Promise<Book[]>
    getAllDescriptions: () => Promise<PartialBook[]>
    deleteAll: () => Promise<void>
    insertOne: (book: Book) => Promise<void>
}

export interface IUserRepo {
    getOneById: (id: string) => Promise<User | null>
    getOneByEmail: (email: string) => Promise<User | null>
    insertOne: (user: User) => Promise<any>
    exists: (user: User) => Promise<boolean>
}