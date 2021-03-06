import React, {FC} from 'react';
import {Book, BookDescription} from "../../models/book/books";
import {TableStyles} from "./styles";
import {SortOption} from "../../models/types";
import {StyledLink} from "../reusable/StyledLink";
import SortAngle from "../reusable/icons/SortAngle";
import {titleCase} from "../../utils/format/titleCase";

interface IProps {
    books: BookDescription[]
    sort?: SortOption
    setSort: Function
}

const fields = ["title", "author", "language", "category", "genre", "type"]

const BookTable: FC<IProps> = ({books, sort, setSort}) => {

    const head =
        <tr role="row">{fields.map(field =>
            <th key={field} onClick={e => setSort(field)}>
                {titleCase(field)}
                <SortAngle show={sort && sort.prop === field} up={sort?.asc}/>
            </th>)}
        </tr>

    const titleLink = (book: BookDescription) =>
        <StyledLink to={'/reader/' + book.id + '/0'}>
            {book.title}
        </StyledLink>

    const rows = books.map(book =>
        <tr key={book.id} role="row">{fields.map(field =>
            <td key={book.id + field}>
                {field === "title"
                    ? titleLink(book)
                    : <>{book[field as keyof BookDescription]}</>}
            </td>)}
        </tr>)

    return (
        <TableStyles role="table">
            <thead>{head}</thead>
            <tbody>{rows}</tbody>
        </TableStyles>
    );
};

export default BookTable;