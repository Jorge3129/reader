import MainContent from "../page/MainContent";
import {useBooks, useFetchBooks} from "../../hooks/books/useBooks";
import React, {useEffect, useState} from "react";
import BookTable from "./BookTable";
import {useSortFilterBooks} from "../../hooks/books/useSortFilterBooks";
import BookList from "./BookList";
import {useAppDispatch} from "../../domain/store/hooks";
import {bookThunk} from "../../domain/reducers/books.thunk";
import {PageList} from "./styles";

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

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(bookThunk(params))
    }

    useEffect(() => {
        console.log(pages)
    }, [pages])

    const [params, setParams] = useState<IParams>({size: 10, page: 1})

    const modeMap = {
        "table": <BookTable sort={sort} setSort={chooseSort} books={editedBooks}/>,
        "list": <BookList sort={sort} setSort={chooseSort} books={editedBooks}/>,
    } as { [key: string]: JSX.Element }

    const bookList = loading ? <h1>Loading...</h1> : modeMap[mode]

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
            <PageList>{
                pages !== 1 &&
                new Array(pages).fill(0).map((_, i) =>
                    <li key={'page' + i}
                        style={params?.page === i + 1 ? {backgroundColor: 'blue'} : {}}
                        className="page_list_item"
                        onClick={e => {
                            if (params?.page === i + 1) return;
                            setParams({...params, page: i + 1})
                            dispatch(bookThunk({page: i + 1, size: params?.size}))
                        }
                        }>
                        {i + 1}
                    </li>)}
            </PageList>
            {bookList}
        </MainContent>
    );
};

export default Books;