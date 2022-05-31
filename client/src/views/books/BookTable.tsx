import React, {FC, MouseEvent} from 'react';
import {Book, BookDescription} from "../../domain/entities/books";
import {TableStyles} from "./styles";
import {SortOption} from "../../domain/types";
import {StyledLink} from "../reusable/StyledLink";
import SortAngle from "../reusable/SortAngle";

interface IProps {
    books: Book[]
    sort?: SortOption
    setSort: Function
}

const fields = ["title", "author", "language", "category", "genre", "type"]

const BookTable: FC<IProps> = ({books, sort, setSort}) => {

    const head =
        <tr>{fields.map(field =>
            <th key={field} onClick={e => setSort(field)}>
                {field[0].toUpperCase() + field.slice(1)}
                <SortAngle show={sort && sort.prop === field} up={sort?.asc}/>
            </th>)}
        </tr>

    const rows = books.map(book =>
        <tr key={book.id}>{fields.map(field =>
            <td key={book.id + field}>
                {field === "title" ?
                    <StyledLink to={'/reader/' + book.id + '/0'}>
                        {book.title}
                    </StyledLink> :
                    <>{book[field] || ''}</>}
            </td>)}
        </tr>)

    return (
        <TableStyles>
            <thead>{head}</thead>
            <tbody>{rows}</tbody>
        </TableStyles>
    );
};

export default BookTable;