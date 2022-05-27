import {Word} from "../domain/entities/words";
import {httpClient} from "./http.client";
import {BOOK_SERVER_URL} from "../constants/api";

const MY_URL = BOOK_SERVER_URL + "/tools"

class UserDataApi {
    async addWord(word: Word, userId: string) {
        return await httpClient.post(MY_URL + "/words/" + userId, {word})
    }

    async deleteWord(wordId: number, userId: string) {
        return await httpClient.delete(MY_URL + "/words/" + userId + '/' + wordId)
    }

    async getWords(userId: string) {
        return await httpClient.get(MY_URL + "/words/" + userId)
    }

    async addRecentBook(bookId: string, userId: string) {
        return await httpClient.post(MY_URL + "/recent/" + userId, {bookId})
    }

    async getRecentBooks(userId: string) {
        return await httpClient.get(MY_URL + "/recent/" + userId)
    }
}

export default new UserDataApi()