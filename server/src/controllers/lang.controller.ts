import {Request, Response} from "express";
import axios from "axios";
import {ILatinDictEntry, Word} from "../models/word";
import {convertFromLatin} from "../utils/latin";

export const LATIN_API = "https://www.latin-is-simple.com/api/"

export class LangController {

    async getTranslation(req: Request, res: Response) {
        const {word} = req.params
        const result = await LangController.queryWord(word)
        res.json(result);
    }

    private static buildQuery(word: string) {
        return LATIN_API + `/vocabulary/search/?query=${word}&forms_only=true`
    }

    private static async queryWord(word: string): Promise<Word[]> {
        try {
            const res = await axios.get<ILatinDictEntry[]>(LangController.buildQuery(word));
            return res.data.map(convertFromLatin);
        } catch (e) {
            return []
        }
    }
}

export default new LangController()