import React, {FC, useEffect, useMemo, useState} from 'react';
import {PageList} from "./styles";
import {useBooks} from "../../hooks/books/useBooks";
import {createRange} from "../../utils/array";

interface IProps {
    currentPage: number
    handlePage: (ownPage: number, currentPage: number) => void
    size?: number
}

const SLICE_LIMIT = 5;

const Pagination: FC<IProps> = ({currentPage, handlePage, size}) => {

    const {pages} = useBooks()
    const [currentSlice, setCurrentSlice] = useState<number>(0);

    useEffect(() => {
        setCurrentSlice(0)
    }, [size])

    const slices = useMemo(() => {
        if (pages <= SLICE_LIMIT) return 1;
        return Math.ceil(pages / SLICE_LIMIT)
    }, [pages])

    const START = SLICE_LIMIT * currentSlice + 1;
    const tempEnd = SLICE_LIMIT * (currentSlice + 1);
    const END = tempEnd > pages ? pages : tempEnd;

    const computeClassName = (ownPage: number) => {
        return currentPage === ownPage ? ' current' : '';
    }

    const prevSlice = () => {
        if (currentSlice === 0) return;
        setCurrentSlice(currentSlice - 1)
    }

    const nextSlice = () => {
        if (currentSlice === slices - 1) return;
        setCurrentSlice(currentSlice + 1)
    }

    if (pages === 1) return null;

    return (
        <PageList>
            {
                currentSlice !== 0 &&
                <li className="page_list_item"
                    onClick={e => prevSlice()}
                >...
                </li>
            }
            {createRange(START, END).map(num =>
                <li key={'page' + num}
                    className={"page_list_item" + computeClassName(num)}
                    onClick={e => handlePage(num, currentPage)}>
                    {num}
                </li>)}
            {
                currentSlice !== slices - 1 &&
                <li className="page_list_item"
                    onClick={e => nextSlice()}
                >...
                </li>
            }
        </PageList>
    );
};

export default Pagination;