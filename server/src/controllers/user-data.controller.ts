import {NextFunction, Request, Response} from "express";
import {UserDataService} from "../services/user.data.service";

export class UserDataController {

    constructor(public userDataService: UserDataService) {
    }

    async addWord(req: Request, res: Response, next: NextFunction) {
        try {
            const {word} = req.body;
            const {userId} = req.params;
            const result = await this.userDataService.addWord(word, userId);
            if (result) res.status(200).json({result});
        } catch (e) {
            next(e)
        }
    }

    async deleteWord(req: Request, res: Response, next: NextFunction) {
        try {
            const {userId, wordId} = req.params;
            const result = await this.userDataService.deleteWord(parseInt(wordId), userId);
            if (result) res.status(200).json({result});
        } catch (e) {
            next(e)
        }
    }

    async getUserWords(req: Request, res: Response, next: NextFunction) {
        try {
            const {userId} = req.params;
            const words = await this.userDataService.getAllWords(userId);
            res.status(200).json(words);
        } catch (e) {
            next(e)
        }
    }

    async addRecentBook(req: Request, res: Response, next: NextFunction) {
        try {
            const {bookId} = req.body;
            const {userId} = req.params;
            const result = await this.userDataService.addRecentBook(bookId, userId);
            if (result) res.status(200).json({result});
        } catch (e) {
            next(e)
        }
    }

    async getRecentBooks(req: Request, res: Response, next: NextFunction) {
        try {
            const {userId} = req.params;
            const books = await this.userDataService.getRecentBooks(userId);
            res.status(200).json(books);
        } catch (e) {
            next(e)
        }
    }

}