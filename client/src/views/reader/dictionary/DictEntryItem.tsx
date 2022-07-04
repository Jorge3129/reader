import React, {Dispatch, FC, SetStateAction} from 'react';
import {AddButtonWrap, DeleteButtonWrap, DictEntryStyle} from "./styles";
import {IDictEntry} from "../../../models/words";
import userDataApi from "../../../api/userData.api";
import {useAppSelector} from "../../../store/hooks";
import {selectUser} from "../../../store/reducers/user/user.reducer";

interface IProps {
    entry: IDictEntry
    deletable?: boolean
    deleteEntry?: (id: number) => void
    light?: boolean
}

const DictEntryItem: FC<IProps> = ({entry, deletable, deleteEntry, light}) => {

    const {user} = useAppSelector(selectUser)

    const addWord = async (entry: IDictEntry) => {
        const res = await userDataApi.addWord(entry, user?.id || "")
        alert(`Added word "${entry.name}" successfully`)
    }

    const deleteWord = async (entry: IDictEntry) => {
        if (deleteEntry) deleteEntry(entry.id)
        const res = await userDataApi.deleteWord(entry.id, user?.id || "")
        alert(`Deleted word "${entry.name}" successfully`)
    }

    return (
        <DictEntryStyle light={light}>
            <AddButtonWrap onClick={e => addWord(entry)}/>
            {deletable &&
                <DeleteButtonWrap onClick={e => deleteWord(entry)}/>}
            <h4 className="word_name">{entry.name}</h4>
            <b className="word_type">{entry.type}.</b>&nbsp;
            <span>{
                entry.translation
            }</span>
        </DictEntryStyle>
    );
};

export default DictEntryItem;