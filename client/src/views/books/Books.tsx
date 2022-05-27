import MainContent from "../page/MainContent";
import {useBooks, useFetchBooks} from "../../hooks/books/useBooks";
import {useState} from "react";
import BookTable from "./BookTable";
import {useSortFilterBooks} from "../../hooks/books/useSortFilterBooks";
import {StyledLink} from "../reusable/StyledLink";

const modes = ["table", "list" ]

const Books = () => {

    useFetchBooks()
    const {editedBooks, sort, chooseSort} = useSortFilterBooks()
    const {loading} = useBooks()
    const [mode, setMode] = useState("table")

    const bookList = loading ? <h1>Loading...</h1> :
        editedBooks.map(book =>
        <div key={book.id}>
            <h4><StyledLink to={'/reader/' + book.id}>{book.title}</StyledLink></h4>
            <div>by {book.author}</div>
        </div>)

    return (
        <MainContent title="Books">
            <select onChange={(e) => setMode(e.target.value)}>
                {modes.map(mode => <option key={mode} value={mode}>{mode}</option> )}
            </select>
            {mode === "list" ? bookList : <BookTable sort={sort} setSort={chooseSort} books={editedBooks}/>}
        </MainContent>
    );
};

export default Books;