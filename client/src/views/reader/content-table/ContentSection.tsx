import React, {FC, MouseEvent} from 'react';
import {ContentTableSection} from "../../../domain/entities/books";
import {sectionIsOpen} from "../../../domain/entities/section.utils";
import {useSection} from "../../../hooks/reader/useSection";
import ContentList from "./ContentList";

interface IProps {
    section: ContentTableSection
    path: number[]
}

const ContentSection: FC<IProps> = ({section, path}) => {

    const {chooseSectionById, choosePath} = useSection()

    const onClick = (e: MouseEvent<HTMLLIElement>, section: ContentTableSection) => {
        e.stopPropagation()
        if (section.uid !== undefined) chooseSectionById(section.uid)
        else choosePath(section, path)
    }

    const createContentSection = (section: ContentTableSection) =>
        typeof section.content !== "string" &&
        typeof section.content[0].content === "string" &&
        <ContentList structure={section.content}/>

    const isOpen = sectionIsOpen(section, path)

    return (
        <li key={section.title}
            className={section.uid !== undefined ? "text_section" : ""}
            onClick={e => onClick(e, section)}
        >
            <span className={"section_title"} style={isOpen ? {color: "red"} : {}}>
                {section.uid === undefined &&
                (isOpen ? <i className="fa-solid fa-angle-down"></i> :
                    <i className="fa-solid fa-angle-right"></i>)}
                {section.title}
            </span>
            {section.uid === undefined && isOpen &&
                createContentSection(section)}
        </li>
    )
};

export default ContentSection;