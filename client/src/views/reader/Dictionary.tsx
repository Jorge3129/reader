import React, { FC } from 'react';
import DictEntry from "./DictEntry";
import {useDictionary} from "../../hooks/useDictionary";

interface IProps {

}

const Dictionary:FC<IProps> = () => {

    const {result, loading} = useDictionary()

    const entries = result && result.map(entry => <DictEntry key={entry.id} entry={entry}/>)

    return (
        <div>
            <h3>Dictionary</h3>
            {loading ? "Loading..." : entries}
        </div>
    );
};

export default Dictionary;