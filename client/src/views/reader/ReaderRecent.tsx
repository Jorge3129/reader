import {FC, useEffect, useState} from "react";
import MainContent from "../page/MainContent";
import {Content} from "../page/styles";
import UserDataApi from "../../api/userData.api";
import {useAppSelector} from "../../store/hooks";
import {selectUser} from "../../store/reducers/user/user.reducer";
import {StyledLink} from "../reusable/StyledLink";
import {BookDescription} from "../../models/book/books";
import {useRedirectReader} from "../../hooks/reader/useRedirectReader";
import {DictEntryStyle} from "./dictionary/styles";

interface IProps {
}

const ReaderRecent: FC<IProps> = () => {

    useRedirectReader()
    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState<BookDescription[]>([])
    const {user} = useAppSelector(selectUser)
    useEffect(() => {
        (async () => {
            if (!user?.id) return;
            const res = await UserDataApi.getRecentBooks(user.id)
            setLoading(false)
            if (!res.data) return;
            setBooks(res.data)
        })()
    }, [])

    if (loading) return <MainContent>
        <h2>LOADING...</h2>
    </MainContent>

    return (
        <Content>
            <ul>{books.map(b =>
                <DictEntryStyle key={b.id}>
                    <StyledLink to={b.id + '/0'}>
                        <span className="highlight">{b.title}</span>
                    </StyledLink>
                    <div> by {b.author} </div>
                </DictEntryStyle>)}
            </ul>
        </Content>
    );
};

export default ReaderRecent