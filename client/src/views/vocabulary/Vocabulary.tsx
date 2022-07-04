import React, {useEffect, useState} from 'react';
import MainContent from "../page/MainContent";
import {IDictEntry} from "../../models/words";
import DictEntryItem from "../reader/dictionary/DictEntryItem";
import userDataApi from "../../api/userData.api";
import {useAppSelector} from "../../store/hooks";
import {selectUser} from "../../store/reducers/user/user.reducer";
import Loader from "../reusable/loader/Loader";

const Vocabulary = () => {

    const [words, setWords] = useState<IDictEntry[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const {user} = useAppSelector(selectUser)

    useEffect(() => {
        setLoading(true)
        userDataApi.getWords(user?.id || "").then(res => {
            if (res.data) setWords(res.data)
            setLoading(false)
        })
    }, [])

    const deleteEntry = (id: number) => {
        setWords(words.filter(w => w.id !== id))
    }

    if (loading) return (
        <MainContent title="Vocabulary">
            <Loader/>
        </MainContent>
    )

    return (
        <MainContent title="Vocabulary">
            <ul>
                {words.map(w =>
                    <DictEntryItem
                        entry={w}
                        key={w.id}
                        deletable={true}
                        deleteEntry={deleteEntry}
                    />)}
            </ul>
        </MainContent>
    );
};

export default Vocabulary;