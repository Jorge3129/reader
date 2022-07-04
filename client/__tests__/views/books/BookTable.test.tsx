import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import BookTable from "../../../src/views/books/BookTable";
import {BookDescription} from "../../../src/models/book/books";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {mockBooks} from "./mock-books";

describe('BookTable component', () => {
    let books: BookDescription[] = mockBooks;
    let ui: JSX.Element;

    beforeEach(() => {
        const setSort = jest.fn();
        ui = <BrowserRouter>
            <Routes>
                <Route index element={<BookTable books={books} setSort={setSort}/>}/>
            </Routes>
        </BrowserRouter>
    })

    test('renders book table', async () => {
        render(ui);
        const bookTable = screen.getByRole('table');
        expect(bookTable).toBeInTheDocument();
    });

    test('renders book rows', async () => {
        render(ui);
        const headerRow = 1;
        const expectedLength = mockBooks.length + headerRow;
        const rows = screen.getAllByRole('row');
        expect(rows.length).toBe(expectedLength);
    });

})

