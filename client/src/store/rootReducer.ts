import {combineReducers} from "redux";
import {bookReducer} from "./reducers/books/books.reducer";
import {readerReducer} from "./reducers/reader/reader.reducer";
import {wordReducer} from "./reducers/dictionary/word.reducer";
import {userReducer} from "./reducers/user/user.reducer";
import {settingsReducer} from "./reducers/user/settings.reducer";
import {sectionReducer} from "./reducers/reader/section.reducer";


export const rootReducer = combineReducers({
    books: bookReducer,
    reader: readerReducer,
    section: sectionReducer,
    word: wordReducer,
    user: userReducer,
    settings: settingsReducer,
})