import MainContent from "../page/MainContent";
import {useBooks, useFetchBooks} from "../../hooks/books/useBooks";
import React, {useEffect, useState} from "react";
import BookTable from "./BookTable";
import {useSortFilterBooks} from "../../hooks/books/useSortFilterBooks";
import BookList from "./BookList";
import {useAppDispatch} from "../../store/hooks";
import {bookThunk} from "../../store/reducers/books/books.thunk";
import Pagination from "./Pagination";
import Loader from "../reusable/loader/Loader";

const modes = ["table", "list"]

interface IParams {
    size?: number
    page: number
}

const Books = () => {

    useFetchBooks({size: 10, page: 1})
    const {loading, books, pages} = useBooks()
    const {editedBooks, sort, chooseSort} = useSortFilterBooks(books)
    const [mode, setMode] = useState("table")
    const dispatch = useAppDispatch()

    const [params, setParams] = useState<IParams>({size: 10, page: 1})
    const [pageSize, setPageSize] = useState<string>("10")

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setParams({...params, size: parseInt(pageSize)})
        dispatch(bookThunk(params))
    }

    useEffect(() => {
       setParams({...params, page: 1})
    }, [params.size])

    const modeMap = {
        "table": <BookTable sort={sort} setSort={chooseSort} books={editedBooks}/>,
        "list": <BookList sort={sort} setSort={chooseSort} books={editedBooks}/>,
    } as { [key: string]: JSX.Element }

    const bookList = loading ? <Loader/> : modeMap[mode]

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
                    value={pageSize}
                    onChange={e => setPageSize(e.target.value)}
                />
                <button>Ok</button>
            </form>
            <Pagination currentPage={params?.page} size={params.size} handlePage={handlePage}/>
            {bookList}
        </MainContent>
    );
};

export default Books;