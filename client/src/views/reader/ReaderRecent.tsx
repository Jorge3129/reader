import {FC, useEffect, useState} from "react";
import MainContent from "../page/MainContent";
import {Content} from "../page/styles";
import UserDataApi from "../../api/userData.api";
import {useAppSelector} from "../../domain/store/hooks";
import {selectUser} from "../../domain/reducers/user.reducer";
import {StyledLink} from "../reusable/StyledLink";
import {BookDescription} from "../../domain/entities/books";
import {useRedirectReader} from "../../hooks/reader/useRedirectReader";

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
            <ul>
                {books.map(b => <div>
                    <StyledLink to={b.id + '/0'}>
                        <span style={{color: "blue"}}>{b.title}</span>
                    </StyledLink>
                    <span> by {b.author} </span>
                </div>)}
            </ul>
        </Content>
    );
};

export default ReaderRecent