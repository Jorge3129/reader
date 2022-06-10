import React, {FC} from 'react';
import {PageList} from "./styles";
import {useBooks} from "../../hooks/books/useBooks";
import {createRange} from "../../utils/array";

interface IProps {
    currentPage: number
    handlePage: (ownPage: number, currentPage: number) => void
}

const Pagination: FC<IProps> = ({currentPage, handlePage}) => {

    const {pages} = useBooks()

    const computeClassName = (ownPage: number) => {
        return currentPage === ownPage ? ' current' : '';
    }

    if (pages === 1) return null;

    return (
        <PageList>{
            createRange(pages).map(num =>
                <li key={'page' + num}
                    className={"page_list_item" + computeClassName(num)}
                    onClick={e => handlePage(num, currentPage)}>
                    {num}
                </li>)}
        </PageList>
    );
};

export default Pagination;