import {httpClient} from "./http.client";
import {LATIN_API} from "../constants/api";

export class LatinApi {
    static query (word: string) {
        return LATIN_API + `/vocabulary/search/?query=${word}&forms_only=true`
    }

    static async queryWord(word: string){
        try {
            const res = await httpClient.get(LatinApi.query(word));
            return res.data;
        } catch (e) {
            return []
        }
    }
}