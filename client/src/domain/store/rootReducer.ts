import {combineReducers} from "redux";
import {bookReducer} from "../reducers/books.reducer";
import {readerReducer} from "../reducers/reader.reducer";
import {wordReducer} from "../reducers/word.reducer";


export const rootReducer = combineReducers({
    books: bookReducer,
    reader: readerReducer,
    word: wordReducer
})