import {combineReducers} from "redux";
import {bookReducer} from "../reducers/books.reducer";
import {readerReducer} from "../reducers/reader.reducer";
import {wordReducer} from "../reducers/word.reducer";
import {userReducer} from "../reducers/user.reducer";
import {settingsReducer} from "../reducers/settings.reducer";


export const rootReducer = combineReducers({
    books: bookReducer,
    reader: readerReducer,
    word: wordReducer,
    user: userReducer,
    settings: settingsReducer,
})