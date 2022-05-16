import React, {FC, MouseEvent} from 'react';
import {Book, BookDescription} from "../../domain/entities/books";
import {TableStyles, BookLink} from "./styles";
import {SortOption} from "../../domain/entities/other";
import {useAppDispatch} from "../../domain/store/hooks";
import {setChosenBook} from "../../domain/reducers/reader.reducer";

interface IProps {
    books: Book[]
    sort?: SortOption
    setSort: Function
}

const fields = ["title", "author", "category", "language"]

const BookTable: FC<IProps> = ({books, sort, setSort}) => {

    const dispatch = useAppDispatch();

    const onClick = (e: MouseEvent, book: BookDescription) => {
        dispatch(setChosenBook(book))
    }

    const rows = books.map(
        book =>
            <tr key={book.id}>
                <td onClick={e => onClick(e, book)}>
                    <BookLink to={'/reader/' + book.id + '/0'}>{book.title}</BookLink>
                </td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.language}</td>
            </tr>
    )

    return (
        <TableStyles>
            <thead>
            <tr>{
                fields.map(field =>
                    <th key={field} onClick={e => setSort(field)}>
                        {field[0].toUpperCase() + field.slice(1)}
                        <span>
                            {sort && sort.prop === field &&
                                (sort.asc
                                    ? <i className="fa-solid fa-angle-up"></i>
                                    : <i className="fa-solid fa-angle-down"></i>)
                            }
                        </span>
                    </th>
                )
            }</tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </TableStyles>
    );
};

export default BookTable;