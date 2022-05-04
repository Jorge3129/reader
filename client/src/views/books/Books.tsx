import Main from "../page/Main";
import {useBooks, useFetchBooks} from "../../hooks/useBooks";

const Books = () => {

    useFetchBooks()
    const {books, loading, chooseBook} = useBooks()

    const bookList = loading ? <h1>Loading...</h1> :
        books.map(book =>
        <div key={book.id} onClick={e => chooseBook(book)}>
            <h4>{book.title}</h4>
            <div>by {book.author}</div>
        </div>)

    return (
        <Main title="Books">
            {bookList}
        </Main>
    );
};

export default Books;