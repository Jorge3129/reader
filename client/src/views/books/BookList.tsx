import {FC} from "react";
import {Book} from "../../domain/entities/books";
import {SortOption} from "../../domain/types";
import {DictEntryStyle} from "../reader/dictionary/styles";
import {StyledLink} from "../reusable/StyledLink";

interface IProps {
    books: Book[]
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