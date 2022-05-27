export interface Word {
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