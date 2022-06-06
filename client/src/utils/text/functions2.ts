import {LineAcc, ParAcc, Word, Line, Paragraph, LineString} from "./types";

const lineToWords = (line: string, key: string) => {
    return line.split(' ')
        .map((word, i): Word => ({
            key: `${key}w${i}`,
            word
        }))
}

export const textToLines = (sectionTextPage: string) : Line[] =>
    sectionTextPage
        .replace(/\s{4,6}/g, '\n&nbsp; ')
        .split(/\n\n/g)
        .reduce((acc: LineString[], p: string, parIx: number) => {
            return acc.concat(p.split("\n")
                .filter(line => line.replace(/\s/g, ""))
                .map((line, i, {length}) => (
                {line, last: i === length - 1, key: `p${parIx}l${i}`}
            )))
        }, [])
        .map(({line, key, last}, i) => ({
            words: lineToWords(line, key),
            number: i + 1,
            key, last
        }))