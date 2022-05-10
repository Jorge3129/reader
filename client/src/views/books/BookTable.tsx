import React, {FC} from 'react';
import {Book} from "../../domain/entities/books";
import {TableStyles, BookLink} from "./styles";
import {SortOption} from "../../domain/entities/other";

interface IProps {
    books: Book[]
    sort?: SortOption
    setSort: Function
}

const fields = ["title", "author", "category", "language"]

const BookTable: FC<IProps> = ({books, sort, setSort}) => {

    const rows = books.map(
        ({title, author, category, language, id}) =>
            <tr key={id}>
                <td><BookLink to={'/reader/' + id}>{title}</BookLink></td>
                <td>{author}</td>
                <td>{category}</td>
                <td>{language}</td>
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