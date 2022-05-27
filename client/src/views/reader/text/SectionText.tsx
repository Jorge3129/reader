import React, {FC, useMemo} from 'react';
import {LineStyled, TextList, Word} from "./styles";
import {useDictionary} from "../../../hooks/reader/useDictionary";

interface LineAcc {
    arr: JSX.Element[],
    ix: number
}

interface IProps {
    sectionTextPage?: string
}

const SectionText: FC<IProps> = ({sectionTextPage}) => {

    const {searchWord} = useDictionary()

    const lineAcc: LineAcc = {arr: [], ix: 0};

    const sectionText = useMemo(() => sectionTextPage &&
        sectionTextPage.replace(/\s\s\s\s/g, '\n&nbsp;')
            .split(/\n\n/g)
            .reduce((acc: LineAcc, p: string, i: number) => {
                const arr = acc.arr.concat(<> {
                    p.split("\n")
                        .filter(line => line)
                        .map((line, lineIx) =>
                            <LineStyled key={line + lineIx}>{
                                line.split(' ')
                                    .map((word, wordIx) =>
                                        word === "&nbsp;"
                                            ?
                                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                            :
                                            word &&
                                            <span key={word + wordIx}>
                                            <Word onClick={e => searchWord(word)}
                                                  key={word + wordIx}
                                            >{word.replace('&nbsp;', '')}
                                            </Word>
                                            <span> </span>
                                        </span>
                                    )
                            } <b className="line_index"
                                 style={{color: "blue"}}>{(++acc.ix) % 5 === 0 && (acc.ix)}
                            </b>
                            </LineStyled>)
                }<br/></>)
                return {arr, ix: acc.ix}
            }, lineAcc).arr, [sectionTextPage])

    return (
        <TextList>{sectionText}</TextList>
    );
};

export default SectionText;