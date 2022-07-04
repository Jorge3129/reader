import {splitEachLine, splitLineIntoWords} from "../../../src/utils/text/text.functions";
import {ILine, ILineNotSplit, IWord} from "../../../src/utils/text/types";

describe('line functions', () => {
    describe('splitLineIntoWords', () => {

        test('should return an array of words as Word objects when given a single string', () => {
            const line = "    Avia Pieridum peragro loca nullius ante"
            const lineKey = "foobar"
            const expected: IWord[] = [
                {word: "Avia", key: lineKey + "w" + 0},
                {word: "Pieridum", key: lineKey + "w" + 1},
                {word: "peragro", key: lineKey + "w" + 2},
                {word: "loca", key: lineKey + "w" + 3},
                {word: "nullius", key: lineKey + "w" + 4},
                {word: "ante", key: lineKey + "w" + 5},
            ]
            const result = splitLineIntoWords(line, lineKey)
            expect(result).toEqual(expected)
        })
    })

    describe('splitEachLine', () => {

        test('should map of ILineNotSplit objects to ILine objects by splitting their line field into an array of words', () => {
            const lines: ILineNotSplit[] = [
                {line: 'Avia Pieridum', key: `p${0}l${0}`, last: false},
                {line: 'peragro loca', key: `p${0}l${1}`, last: false},
                {line: 'nullius ante', key: `p${0}l${2}`, last: true},
            ]
            const expected: ILine[] = [
                {
                    words: [
                        {word: "Avia", key: `p${0}l${0}w${0}`},
                        {word: "Pieridum", key: `p${0}l${0}w${1}`}
                    ],
                    key: `p${0}l${0}`,
                    number: 1,
                    last: false
                },
                {
                    words: [
                        {word: "peragro", key: `p${0}l${1}w${0}`},
                        {word: "loca", key: `p${0}l${1}w${1}`},
                    ],
                    key: `p${0}l${1}`,
                    number: 2,
                    last: false
                },
                {
                    words: [
                        {word: "nullius", key: `p${0}l${2}w${0}`},
                        {word: "ante", key: `p${0}l${2}w${1}`}
                    ],
                    key: `p${0}l${2}`,
                    number: 3,
                    last: true
                },
            ]
            const result = splitEachLine(lines)
            expect(result).toEqual(expected)
        })
    })
})