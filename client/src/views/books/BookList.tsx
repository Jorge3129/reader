import {FC} from "react";
import {Book, BookDescription} from "../../models/book/books";
import {SortOption} from "../../models/types";
import {DictEntryStyle} from "../reader/dictionary/styles";
import {StyledLink} from "../reusable/StyledLink";

interface IProps {
    books: BookDescription[]
    sort?: SortOption
    setSort: Function
}

const BookList: FC<IProps> = ({books, sort, setSort}) => {
    return <ul>{
        books.map(book =>
        <DictEntryStyle key={book.id}>
            <h4><StyledLink to={'/reader/' + book.id}>{book.title}</StyledLink></h4>
            <div>by {book.author}</div>
        </DictEntryStyle>)
        }
    </ul>
}

export default BookList