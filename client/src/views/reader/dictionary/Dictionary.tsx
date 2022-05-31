import React, { FC } from 'react';
import DictEntry from "./DictEntry";
import {useDictionary} from "../../../hooks/reader/useDictionary";
import {DictStyle} from "./styles";

interface IProps {

}

const Dictionary:FC<IProps> = () => {

    const {result, loading} = useDictionary()
    const entries = result && result.map(entry => <DictEntry light key={entry.id} entry={entry}/>)

    return (
        <DictStyle>
            <h3 className="dict_title">Dictionary</h3>
            {loading ? "Loading..." : entries?.length ? entries : "No result"}
        </DictStyle>
    );
};

export default Dictionary;