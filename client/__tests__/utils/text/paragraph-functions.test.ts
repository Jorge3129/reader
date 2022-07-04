import {
    splitEachParagraphIntoLines,
    splitOneParagraphIntoLines,
    splitTextIntoParagraphs
} from "../../../src/utils/text/text.functions";
import {ILine, ILineNotSplit} from "../../../src/utils/text/types";

describe('paragraph functions', () => {

    describe('splitTextIntoParagraphs', () => {

        test('should return an array of paragraphs as strings when given a single string', () => {
            const line = `Avia Pieridum\n\nperagro loca\n\nnullius ante`
            const expected: string[] = ['Avia Pieridum', 'peragro loca', 'nullius ante']
            const result = splitTextIntoParagraphs(line)
            expect(result).toEqual(expected)
        })
    })

    describe('splitOneParagraphIntoLines', () => {

        test('should return an array of lines as Line objects when given a single string, with last lines marked', () => {
            const paragraph = `Avia Pieridum\nperagro loca\nnullius ante`
            const paragraphIndex = 1;
            const expected: ILineNotSplit[] = [
                {line: 'Avia Pieridum', key: `p${paragraphIndex}l${0}`, last: false},
                {line: 'peragro loca', key: `p${paragraphIndex}l${1}`, last: false},
                {line: 'nullius ante', key: `p${paragraphIndex}l${2}`, last: true},
            ]
            const result = splitOneParagraphIntoLines(paragraph, paragraphIndex)
            expect(result).toEqual(expected)
        })
    })

    describe('splitEachParagraphIntoLines', () => {

        test('should return an array of lines as Line objects when given a single string, with last lines marked', () => {
            const paragraphs = [
                `Avia Pieridum\nperagro loca\nnullius ante`,
                `Avia Pieridum\nperagro loca\nnullius ante`,
                `nullius ante`
            ]
            const expected: ILineNotSplit[] = [
                {line: 'Avia Pieridum', key: `p${0}l${0}`, last: false},
                {line: 'peragro loca', key: `p${0}l${1}`, last: false},
                {line: 'nullius ante', key: `p${0}l${2}`, last: true},
                {line: 'Avia Pieridum', key: `p${1}l${0}`, last: false},
                {line: 'peragro loca', key: `p${1}l${1}`, last: false},
                {line: 'nullius ante', key: `p${1}l${2}`, last: true},
                {line: 'nullius ante', key: `p${2}l${0}`, last: true},
            ]
            const result = splitEachParagraphIntoLines(paragraphs)
            expect(result).toEqual(expected)
        })
    })

})

