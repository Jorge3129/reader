import React, {Dispatch, FC, SetStateAction} from 'react';
import {ContentTableStyle, Paragraph} from "./styles";
import { useSection} from "../../hooks/useReader";
import {BookSection} from "../../domain/entities/books";

interface IProps {
}

const ContentTable: FC<IProps> = () => {

    const {chooseSection, content} = useSection()

    if (!content) return null;

    const createContentList = (content: BookSection[]) => {
            return <ul>
                {content.map(
                    section =>
                        <li key={section.uid}
                            onClick={e => chooseSection(section)}
                        >
                            {section.title}
                        </li>
                )}
            </ul>
    }

    return (
        <ContentTableStyle>
            <div className="container">
                {createContentList(content)}
            </div>
        </ContentTableStyle>
    );
};

export default ContentTable;