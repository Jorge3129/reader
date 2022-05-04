import React, {FC} from 'react';
import {DictEntryStyle} from "./dictStyles";
import {Word} from "../../domain/entities/words";

interface IProps {
    entry: Word
}

const DictEntry: FC<IProps> = ({entry}) => {
    return (
        <DictEntryStyle>
            <h4 className="word">{entry.short_name}</h4>
            <b className="word_type">{entry.type.name}.</b>&nbsp;
            <span>{
                entry.translations_unstructured.en
            }</span>
        </DictEntryStyle>
    );
};

export default DictEntry;