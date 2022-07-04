export interface IDictEntry {
    id: number,
    name: string,
    full?: string
    type: string,
    translation: string
}


export interface ILatinDictEntry {
    id: number,
    intern_type: string,
    short_name: string,
    full_name: string,
    type: {
        name: string,
        label: string,
    },
    translations_unstructured: { [key: string]: any },
    url: string
}