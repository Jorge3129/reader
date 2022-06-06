import {LineAcc, ParAcc, Word, Line, Paragraph} from "./types";

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

export const textToParagraphs = (sectionTextPage: string) =>
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
        }, parAcc).parArr