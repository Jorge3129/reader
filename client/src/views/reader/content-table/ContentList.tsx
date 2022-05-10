import {ContentTableSection} from "../../../domain/entities/books";
import React, {FC} from "react";
import {useSection} from "../../../hooks/reader/useSection";
import ContentSection from "./ContentSection";

interface IProps {
    structure: ContentTableSection[]
}

const ContentList: FC<IProps> = ({structure}) => {

    const {path} = useSection()

    return <ul className="section_list">
        {structure.map(section =>
            <ContentSection
                key={section.depth + "" + section.path}
                section={section}
                path={path}
            />
        )}
    </ul>
}

export default ContentList