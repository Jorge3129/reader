export interface IWord {
    key: string
    word: string
}

export interface ILine {
    key: string
    words: IWord[]
    number: number
    last?: boolean
}

export interface ILineNotSplit {
    line: string
    last?: boolean
    key: string
}

export interface Paragraph {
    key: string
    lines: ILine[]
}