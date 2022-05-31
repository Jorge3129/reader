import React, {FC, useMemo} from 'react';
import {LineStyled, TextList, Word} from "./styles";
import {useDictionary} from "../../../hooks/reader/useDictionary";

interface IProps {
    sectionTextPage?: string
}

interface Word {
    key: string
    word: string
}

interface Line {
    key: string
    words: Word[]
    number: number
}

interface Paragraph {
    key: string
    lines: Line[]
}

interface ParAcc {
    parArr: Paragraph[],
    parIx: number
}

interface LineAcc {
    lineArr: Line[],
    lineIx: number
}

const SectionText: FC<IProps> = ({sectionTextPage}) => {

    const {searchWord} = useDictionary()

    const parAcc: ParAcc = {parArr: [], parIx: 1};
    // const lineAcc: LineAcc = {lineArr: [], lineIx: 1};

    const lineToWords = (line: string, lineIx: number) => {
        return line.split(' ')
            .map((word, wordIx): Word => ({
                key: lineIx + word + wordIx,
                word
            }))
    }

    const paragraphToLines = (p: string, startLineNum: number): LineAcc => {
        return p.split("\n")
            .filter(line => line.replace(/\s/g, ""))
            .reduce((lineAcc, line, lineIx) => {
                    const newLine = {
                        key: line + lineIx,
                        words: lineToWords(line, lineIx),
                        number: lineAcc.lineIx
                    }
                    const lineArr = lineAcc.lineArr.concat(newLine)
                    return {lineArr, lineIx: lineAcc.lineIx + 1}
                }, {lineArr: [], lineIx: startLineNum} as LineAcc
            )
    }

    const paragraphList = useMemo(() => sectionTextPage &&
        sectionTextPage
            .replace(/\s{4,6}/g, '\n&nbsp; ')
            .split(/\n\n/g)
            .reduce((acc: ParAcc, p: string, parIx: number) => {
                const accRes = paragraphToLines(p, acc.parIx)
                const newParagraph = {
                    key: parIx + '',
                    lines: accRes.lineArr
                }
                const parArr = acc.parArr.concat(newParagraph)
                return {parArr, parIx: accRes.lineIx}
            }, parAcc).parArr, [sectionTextPage])

    if (!paragraphList) return null;

    return (
        <TextList>{paragraphList.map(p =>
            <span key={p.key}>
                {p.lines.map(line =>
                    <LineStyled key={line.key}>
                        {line.words.map(({word, key}) =>
                            word === "&nbsp;" ?
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> :
                                word &&
                                <span key={key}>
                                    <Word onClick={e => searchWord(word)}>
                                        {word.replace('&nbsp;', '')}
                                    </Word>
                                    <span> </span>
                                </span>
                        )}
                        {line.number % 5 === 0 &&
                            <b className="line_index"
                               style={{color: "blue"}}>
                                {line.number}
                            </b>}
                    </LineStyled>
                )}
                <br/>
            </span>)}
        </TextList>
    );
};

export default SectionText;