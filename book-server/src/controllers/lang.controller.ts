import {Request, Response} from "express";
import axios from "axios";

export const LATIN_API = "https://www.latin-is-simple.com/api/"

export class LangController {

    async getTranslation(req: Request, res: Response) {
        const {word} = req.params
        const result = await this.queryWord(word)
        res.json(result)
    }

    buildQuery (word: string) {
        return LATIN_API + `/vocabulary/search/?query=${word}&forms_only=true`
    }

    async queryWord(word: string){
        try {
            const res = await axios.get(this.buildQuery(word));
            //console.log(res.data)
            return res.data;
        } catch (e) {
            return []
        }
    }
}

export default new LangController()