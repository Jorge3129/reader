import { useMemo, useState} from "react";
import {FilterOption, SortOption} from "../../models/types";
import _ from "lodash"
import {Book, BookDescription} from "../../models/book/books";

export const useSortFilterBooks = (books: BookDescription[]) => {
    const [sort, setSort] = useState<SortOption>()
    const [filter, setFilter] = useState<FilterOption>()

    const sortedBooks = useMemo(() => {
        if (!sort) return books;
        return _.orderBy(books, [sort.prop], [sort.asc ? "asc" : "desc"])
    }, [sort, books])

    const editedBooks = useMemo(() => {
        if (!filter) return sortedBooks;
        return sortedBooks.filter(book => book[filter.prop as keyof BookDescription] === filter.value)
    }, [filter, sortedBooks])

    const chooseSort = (prop: string) => {
        if (sort?.prop === prop) setSort({...sort, asc: !sort.asc})
        else setSort({prop, asc: true})
    }

    return {editedBooks, sort, chooseSort, setFilter}
}