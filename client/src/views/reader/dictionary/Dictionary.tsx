import React, { FC } from 'react';
import DictEntryItem from "./DictEntryItem";
import {useDictionary} from "../../../hooks/reader/useDictionary";
import {DictStyle} from "./styles";
import Loader from "../../reusable/loader/Loader";

interface IProps {

}

const Dictionary:FC<IProps> = () => {

    const {result, loading} = useDictionary()
    const entries = result && result.map(entry => <DictEntryItem light key={entry.id} entry={entry}/>)

    return (
        <DictStyle>
            <h3 className="dict_title">Dictionary</h3>
            {loading ? <Loader light/> : entries?.length ? entries : "No result"}
        </DictStyle>
    );
};

export default Dictionary;