import React, {FC, useMemo} from 'react';
import {LineStyled, TextList, Word} from "./styles";
import {useDictionary} from "../../../hooks/reader/useDictionary";
import {ILine} from "../../../utils/text/types";

interface IProps {
    lineList?: ILine[]
}

const LineNumber = ({number}: { number: number }) => {
    if (number % 5 !== 0) return null;
    return <b className="line_index">{number}</b>
}

const SectionText: FC<IProps> = ({lineList}) => {

    const {searchWord} = useDictionary()

    if (!lineList) return null;

    return (
        <TextList>{lineList.map(line =>
            <span key={line.key}>
                <LineStyled>
                    {line.words.map(({word, key}) =>
                        <span key={key}>
                            <Word onClick={e => searchWord(word)}>{word}</Word>
                            <span> </span>
                        </span>)}
                    <LineNumber number={line.number}/>
                </LineStyled>
                {line.last && <br/>}
            </span>)}
        </TextList>
    );
};

export default SectionText;