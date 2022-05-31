import React, {Dispatch, FC, SetStateAction} from 'react';
import {AddButtonWrap, DeleteButtonWrap, DictEntryStyle} from "./styles";
import {Word} from "../../../domain/entities/words";
import userDataApi from "../../../api/userData.api";
import {useAppSelector} from "../../../domain/store/hooks";
import {selectUser} from "../../../domain/reducers/user.reducer";

interface IProps {
    entry: Word
    deletable?: boolean
    deleteEntry?: (id: number) => void
    light?: boolean
}

const DictEntry: FC<IProps> = ({entry, deletable, deleteEntry, light}) => {

    const {user} = useAppSelector(selectUser)

    const addWord = async (entry: Word) => {
        const res = await userDataApi.addWord(entry, user?.id || "")
        alert(`Added word "${entry.short_name}" successfully`)
    }

    const deleteWord = async (entry: Word) => {
        if (deleteEntry) deleteEntry(entry.id)
        const res = await userDataApi.deleteWord(entry.id, user?.id || "")
        alert(`Deleted word "${entry.short_name}" successfully`)
    }

    return (
        <DictEntryStyle light={light}>
            <AddButtonWrap onClick={e => addWord(entry)}/>
            {deletable &&
                <DeleteButtonWrap onClick={e => deleteWord(entry)}/>}
            <h4 className="word">{entry.short_name}</h4>
            <b className="word_type">{entry.type.name}.</b>&nbsp;
            <span>{
                entry.translations_unstructured.en
            }</span>
        </DictEntryStyle>
    );
};

export default DictEntry;