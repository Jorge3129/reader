import React, {useEffect, useState} from 'react';
import MainContent from "../page/MainContent";
import {Word} from "../../domain/entities/words";
import DictEntry from "../reader/dictionary/DictEntry";
import userDataApi from "../../api/userData.api";
import {useAppSelector} from "../../domain/store/hooks";
import {selectUser} from "../../domain/reducers/user/user.reducer";

const Vocabulary = () => {

    const [words, setWords] = useState<Word[]>([])
    const {user} = useAppSelector(selectUser)

    useEffect(() => {
        (async () => {
            const res = await userDataApi.getWords(user?.id || "")
            if (res.data) setWords(res.data)
        })()
    }, [])

    const deleteEntry = (id: number) => {
        setWords(words.filter(w => w.id !== id))
    }

    return (
        <MainContent title="Vocabulary">
            <ul>
                {words.map(w =>
                    <DictEntry
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