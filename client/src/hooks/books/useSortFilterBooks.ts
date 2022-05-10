import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {useEffect, useMemo, useState} from "react";
import {FilterOption, SortOption} from "../../domain/entities/other";
import books from "../../views/books/Books";
import _ from "lodash"
import {selectBooks} from "../../domain/reducers/books.reducer";
import {Book} from "../../domain/entities/books";


export const useSortFilterBooks = () => {
    const {books} = useAppSelector(selectBooks)
    const [sort, setSort] = useState<SortOption>()
    const [filter, setFilter] = useState<FilterOption>()

    const sortedBooks = useMemo(() => {
        if (!sort) return books;
        return _.orderBy(books, [sort.prop], [sort.asc ? "asc" : "desc"])
    }, [sort, books])

    const editedBooks = useMemo(() => {
        if (!filter) return sortedBooks;
        return sortedBooks.filter(book => book[filter.prop] === filter.value)
    }, [filter, sortedBooks])

    const chooseSort = (prop: string) => {
        if (sort?.prop === prop) setSort({...sort, asc: !sort.asc})
        else setSort({prop, asc: true})
    }

    return {editedBooks, sort, chooseSort, setFilter}
}