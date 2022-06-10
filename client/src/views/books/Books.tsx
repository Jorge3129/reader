import MainContent from "../page/MainContent";
import {useBooks, useFetchBooks} from "../../hooks/books/useBooks";
import React, {useEffect, useState} from "react";
import BookTable from "./BookTable";
import {useSortFilterBooks} from "../../hooks/books/useSortFilterBooks";
import BookList from "./BookList";
import {useAppDispatch} from "../../domain/store/hooks";
import {bookThunk} from "../../domain/reducers/books/books.thunk";
import {PageList} from "./styles";
import Pagination from "./Pagination";

const modes = ["table", "list"]

interface IParams {
    size?: number
    page: number
}

const Books = () => {

    useFetchBooks({size: 10, page: 1})
    const {loading, books} = useBooks()
    const {editedBooks, sort, chooseSort} = useSortFilterBooks(books)
    const [mode, setMode] = useState("table")
    const dispatch = useAppDispatch()

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(bookThunk(params))
    }

    const [params, setParams] = useState<IParams>({size: 10, page: 1})

    const modeMap = {
        "table": <BookTable sort={sort} setSort={chooseSort} books={editedBooks}/>,
        "list": <BookList sort={sort} setSort={chooseSort} books={editedBooks}/>,
    } as { [key: string]: JSX.Element }

    const bookList = loading ? <h1>Loading...</h1> : modeMap[mode]

    const handlePage = (ownPage: number, currentPage: number) => {
        if (currentPage === ownPage) return;
        setParams({...params, page: ownPage})
        dispatch(bookThunk({page: ownPage, size: params?.size}))
    }

    return (
        <MainContent title="Books">
            <form onSubmit={onSubmit}>
                <select onChange={(e) => setMode(e.target.value)}>
                    {modes.map(mode => <option key={mode} value={mode}>{mode}</option>)}
                </select>
                <label>Limit</label>
                <input
                    type="number"
                    value={params.size + ''}
                    onChange={e => setParams({...params, size: parseInt(e.target.value)})}
                />
                <button>Ok</button>
            </form>
            <Pagination currentPage={params?.page} handlePage={handlePage}/>
            {bookList}
        </MainContent>
    );
};

export default Books;