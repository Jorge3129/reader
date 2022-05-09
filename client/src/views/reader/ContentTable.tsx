import React, {FC, MouseEvent, useMemo} from 'react';
import {ContentTableStyle} from "./styles";
import {useSection} from "../../hooks/reader/useSection";
import {ContentTableSection} from "../../domain/entities/books";
import {sectionIsOpen} from "../../domain/entities/section.utils";

interface IProps {
}

const ContentTable: FC<IProps> = () => {

    const {structure, path, chooseSectionById, choosePath} = useSection()


    const onClick = (e: MouseEvent<HTMLLIElement>, section: ContentTableSection) => {
        e.stopPropagation()
        section.uid !== undefined ? chooseSectionById(section.uid) : choosePath(section, path)
    }

    const openContent = (section: ContentTableSection) =>
        typeof section.content !== "string" &&
        typeof section.content[0].content === "string" &&
        createContentList(section.content)


    const createContentList = (content: ContentTableSection[]) => {
        return <ul className="section_list">
            {content.map(
                section => {
                    const isOpen = sectionIsOpen(section, path, true)
                    return (
                        <li key={section.title}
                            className={section.uid !== undefined ? "text_section" : ""}
                            onClick={e => onClick(e, section)}
                        >
                            {section.uid === undefined &&
                                (isOpen ? <i className="fa-solid fa-angle-down"></i> :
                                    <i className="fa-solid fa-angle-right"></i>)}
                            {section.title}
                            {section.uid === undefined &&
                                isOpen &&
                                openContent(section)}
                        </li>)
                }
            )}
        </ul>
    }

    const structuredContents = useMemo(() => {
        console.log(path)
        return structure && createContentList(structure)
    }, [structure, path])

    return (
        <ContentTableStyle>
            <div className="container">
                {structuredContents}
            </div>
        </ContentTableStyle>
    );
};

export default ContentTable;