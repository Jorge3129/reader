import {ContentTableSection} from "../../../models/book/books";
import React, {FC} from "react";
import {useSection} from "../../../hooks/reader/useSection";
import ContentSection from "./ContentSection";

interface IProps {
    structure: ContentTableSection[]
    topLevel?: boolean
}

const ContentList: FC<IProps> = ({structure, topLevel}) => {

    const {path} = useSection()

    return <ul className={"section_list" + (topLevel ? " top_level_list" : "")}>
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