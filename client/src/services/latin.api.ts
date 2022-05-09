import axios from "axios";

export const LATIN_API = "https://www.latin-is-simple.com/api/"

export class LatinApi {
    static query (word: string) {
        return LATIN_API + `/vocabulary/search/?query=${word}&forms_only=true`
    }

    static async queryWord(word: string){
        try {
            const res = await axios.get(LatinApi.query(word));
            return res.data;
        } catch (e) {
            return []
        }
    }
}