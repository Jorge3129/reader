import React, {FC, useMemo} from 'react';
import {LineStyled, TextList, Word} from "./styles";
import {useDictionary} from "../../../hooks/reader/useDictionary";

interface ParAcc {
    parArr: JSX.Element[],
    parIx: number
}

interface LineAcc {
    lineArr: JSX.Element[],
    lineIx: number
}

interface IProps {
    sectionTextPage?: string
}

const SectionText: FC<IProps> = ({sectionTextPage}) => {

    const {searchWord} = useDictionary()

    const parAcc: ParAcc = {parArr: [], parIx: 1};
    // const lineAcc: LineAcc = {lineArr: [], lineIx: 1};

    const sectionText = useMemo(() => sectionTextPage &&
        sectionTextPage
            .replace(/\s{4,6}/g, '\n&nbsp; ')
            .split(/\n\n/g)
            .reduce((acc: ParAcc, p: string, i: number) => {
                const accRes = p.split("\n")
                    .filter(line => line.replace(/\s/g, ""))
                    .reduce((lineAcc, line, lineIx) => {
                            const lineArr = lineAcc.lineArr.concat(<LineStyled key={line + lineIx}>{
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
                                 style={{color: "blue"}}>
                                {lineAcc.lineIx % 5 === 0 && (lineAcc.lineIx)}
                            </b>
                            </LineStyled>)
                            return {lineArr, lineIx: lineAcc.lineIx + 1}
                        }, {lineArr: [], lineIx: acc.parIx} as LineAcc
                    )
                const parArr = acc.parArr.concat(<>{accRes.lineArr}<br/></>)
                return {parArr, parIx: accRes.lineIx}
            }, parAcc).parArr, [sectionTextPage])

    return (
        <TextList>{sectionText}</TextList>
    );
};

export default SectionText;