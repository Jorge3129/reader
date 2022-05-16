import React, {FC, MouseEvent} from 'react';
import {ContentTableSection} from "../../../domain/entities/books";
import {sectionIsOpen} from "../../../domain/entities/section.utils";
import {useSection} from "../../../hooks/reader/useSection";
import ContentList from "./ContentList";
import SectionLink from "./SectionLink";
import {ContentSectionLi} from "./styles.ContentSectionLi";

interface IProps {
    section: ContentTableSection
    path: number[]
}

const ContentSection: FC<IProps> = ({section, path}) => {

    const {choosePath} = useSection()

    const onClick = (e: MouseEvent<HTMLElement>, section: ContentTableSection) => {
        e.stopPropagation()
        choosePath(section, path)
    }

    const contentSection = typeof section.content !== "string" &&
        <ContentList structure={section.content}/>
    const isOpen = sectionIsOpen(section, path)
    const isTextSection = section.uid !== undefined;
    const topLevel = !!section.path && section.path.length === 1 ? " top_level" : "";
    const classList = (isOpen ? " open_section" : "") + topLevel;

    if (isTextSection) return (
        <ContentSectionLi>
            <span className={"section_title text_section" + classList}>
                <SectionLink className={"content_link"} section={section} step={0}>
                    {section.title}
                </SectionLink>
            </span>
        </ContentSectionLi>)

    return (
        <ContentSectionLi>
            <span className={"section_title list_section" + classList} onClick={e => onClick(e, section)}>
                {isOpen
                    ? <i className="fa-solid fa-angle-down angle_icon"></i>
                    : <i className="fa-solid fa-angle-right angle_icon"></i>}
                    {topLevel && section?.type ?  section.type + " ": ""} {
                    section.title}
            </span>
            {isOpen && contentSection}
        </ContentSectionLi>
    )
};

export default ContentSection;