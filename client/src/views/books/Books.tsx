import Main from "../page/Main";
import {useBooks, useFetchBooks} from "../../hooks/books/useBooks";
import {useState} from "react";
import BookTable from "./BookTable";
import {useSortFilterBooks} from "../../hooks/books/useSortFilterBooks";
import {BookLink} from "./styles";

const modes = ["table", "list" ]

const Books = () => {

    useFetchBooks()
    const {editedBooks, sort, chooseSort} = useSortFilterBooks()
    const {loading, chooseBook} = useBooks()
    const [mode, setMode] = useState("table")

    const bookList = loading ? <h1>Loading...</h1> :
        editedBooks.map(book =>
        <div key={book.id}>
            <h4><BookLink to={'/reader/' + book.id}>{book.title}</BookLink></h4>
            <div>by {book.author}</div>
        </div>)

    return (
        <Main title="Books">
            <select onChange={(e) => setMode(e.target.value)}>
                {modes.map(mode => <option key={mode} value={mode}>{mode}</option> )}
            </select>
            {mode === "list" ? bookList : <BookTable sort={sort} setSort={chooseSort} books={editedBooks}/>}
        </Main>
    );
};

export default Books;