export interface Word {
    key: string
    word: string
}

export interface Line {
    key: string
    words: Word[]
    number: number
    last?: boolean
}

export interface LineString {
    line: string
    last?: boolean
    key: string
}

export interface Paragraph {
    key: string
    lines: Line[]
}
