export interface Word {
    key: string
    word: string
}

export interface Line {
    key: string
    words: Word[]
    number: number
}

export interface Paragraph {
    key: string
    lines: Line[]
}

export interface ParAcc {
    parArr: Paragraph[],
    parIx: number
}

export interface LineAcc {
    lineArr: Line[],
    lineIx: number
}