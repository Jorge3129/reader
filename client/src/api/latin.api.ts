import {httpClient} from "./http.client";
import {BOOK_SERVER_URL, LATIN_API} from "../constants/api";
import {IDictEntry} from "../models/words";

export class LatinApi {
    static query(word: string) {
        return LATIN_API + `/vocabulary/search/?query=${word}&forms_only=true`
    }

    static async queryWord(word: string): Promise<IDictEntry[]> {
        try {
            //const res = await httpClient.get(LatinApi.query(word));
            const res = await httpClient.get(BOOK_SERVER_URL + '/lang/word/' + word);
            return res.data;
        } catch (e) {
            return []
        }
    }
}