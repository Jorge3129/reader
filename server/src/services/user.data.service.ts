import {Word} from "../models/word";
import {IDBService} from "../db/db.types";
import {ObjectId} from "mongodb";


export class UserDataService {

    constructor(public db: IDBService) {
    }

    async addWord(word: Word, userId: string) {
        const dbUser = await this.createUserData(userId)
        // add word id to user data document
        const words = dbUser.words;
        if (!words.find(w => w === word.id)) words.push(word.id)
        // add word object to words collection
        const dbWord = await this.db.words.findOne({id: word.id})
        if (!dbWord) await this.db.words.insertOne(word);
        return await this.db.userData.updateOne({userId: new ObjectId(dbUser.userId)}, {words});
    }

    async deleteWord(wordId: number, userId: string) {
        const dbUser = await this.createUserData(userId)
        const words = dbUser.words.filter(w => w !== wordId)
        return await this.db.userData.updateOne({userId: new ObjectId(dbUser.userId)}, {words});
    }

    async getAllWords(userId: string) {
        return await this.db.userData.getWords(userId);
    }

    async addRecentBook(bookId: string, userId: string) {
        const objBookId = new ObjectId(bookId)
        const dbUser = await this.createUserData(userId)
        const books = [...dbUser.recentBooks.filter(b => b !== objBookId), objBookId]
        return await this.db.userData.updateOne({userId: new ObjectId(dbUser.userId)},
            {recentBooks: books});
    }

    async getRecentBooks(userId: string) {
        return await this.db.userData.getRecentBooks(userId);
    }

    private async createUserData(userId: string) {
        let dbUser = await this.db.userData.findOne({userId: new ObjectId(userId)});
        if (!dbUser) dbUser = await this.db.userData.create({
            userId: new ObjectId(userId),
            words: [],
            recentBooks: []
        })
        return dbUser;
    }
}