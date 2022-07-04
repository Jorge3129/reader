import {ILatinDictEntry, Word} from "../models/word";

export const convertFromLatin = (word: ILatinDictEntry): Word => {
    return {
        type: word.type.name,
        name: word.short_name,
        full: word.full_name,
        translation: word.translations_unstructured['en'] || '',
        id: word.id
    }
}