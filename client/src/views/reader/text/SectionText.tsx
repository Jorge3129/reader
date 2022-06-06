import React, {FC, useMemo} from 'react';
import {LineStyled, TextList, Word} from "./styles";
import {useDictionary} from "../../../hooks/reader/useDictionary";
import {textToLines} from "../../../utils/text/functions2";

interface IProps {
    sectionTextPage?: string
}

const LineNumber = ({number}: { number: number }) => {
    if (number % 5 !== 0) return null;
    return <b className="line_index">{number}</b>
}

const SectionText: FC<IProps> = ({sectionTextPage}) => {

    const {searchWord} = useDictionary()

    const lineList = useMemo(() => sectionTextPage && textToLines(sectionTextPage),
        [sectionTextPage])

    if (!lineList) return null;

    return (
        <TextList>{lineList.map(line =>
            <>
                <LineStyled key={line.key}>
                    {line.words.map(({word, key}) =>
                        word === "&nbsp;" ?
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> :
                            word &&
                            <span key={key}>
                            <Word onClick={e => searchWord(word)}>
                                {word.replace('&nbsp;', '')}
                            </Word><span> </span>
                        </span>)}
                    <LineNumber number={line.number}/>
                </LineStyled>
                {line.last && <br/>}
            </>)}
        </TextList>
    );
};

export default SectionText;