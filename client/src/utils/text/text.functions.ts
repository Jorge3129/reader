import {IWord, ILine, ILineNotSplit} from "./types";
import _ from 'lodash'

export const splitTextIntoParagraphs = (text: string): string[] => {
    return text.trim().split(/\n{2,}/g)
}

export const splitEachParagraphIntoLines = (paragraphs: string[]) => {
    return paragraphs.flatMap((paragraph: string, paragraphIndex: number) => {
        return splitOneParagraphIntoLines(paragraph, paragraphIndex)
    })
}

export const splitOneParagraphIntoLines = (paragraph: string, paragraphIndex: number): ILineNotSplit[] => {
    return paragraph.split("\n")
        .map((line, i, {length}) => (
            {line, last: i === length - 1, key: `p${paragraphIndex}l${i}`}
        ))
}

export const splitEachLine = (lines: ILineNotSplit[]): ILine[] => {
    return lines.map(({line, key, last}, i) => ({
        words: splitLineIntoWords(line, key),
        number: i + 1,
        key, last
    }))
}

export const splitLineIntoWords = (line: string, lineKey: string): IWord[] => {
    return line.trim().split(/\s+/)
        .map((word, i): IWord => ({
            key: `${lineKey}w${i}`,
            word
        }))
}

export const splitTextIntoLines: (text: string) => ILine[] =
    _.flow([
        splitTextIntoParagraphs,
        splitEachParagraphIntoLines,
        splitEachLine
    ])
