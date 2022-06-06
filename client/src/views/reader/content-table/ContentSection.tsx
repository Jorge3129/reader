import React, {FC, MouseEvent} from 'react';
import {ContentTableSection} from "../../../domain/entities/book/books";
import {sectionIsOpen} from "../../../domain/entities/book/section.utils";
import {useSection} from "../../../hooks/reader/useSection";
import ContentList from "./ContentList";
import SectionLink from "./SectionLink";
import {ContentSectionLi} from "./styles.ContentSectionLi";
import {isContainerSection, isTextSection} from "../../../domain/entities/book/typeGuards";
import {Chevron} from "../../reusable/icons/Chevron";

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

    const isOpen = sectionIsOpen(section, path)
    const topLevel = !!(section.path && section.path.length === 1) ? " top_level" : "";
    const classList = (isOpen ? " open_section" : "") + topLevel;

    if (isTextSection(section)) return (
        <ContentSectionLi>
            <span className={"section_title text_section" + classList}>
                <SectionLink className={"content_link"} section={section} step={0}>
                    {section.title}
                </SectionLink>
            </span>
        </ContentSectionLi>)

    const contentSection = <ContentList structure={section.children}/>

    return (
        <ContentSectionLi>
            <span className={"section_title list_section" + classList} onClick={e => onClick(e, section)}>
                <Chevron isOpen={isOpen}/>
                {topLevel && section?.type ? section.type + " " : ""} {
                section.title}
            </span>
            {isOpen && contentSection}
        </ContentSectionLi>
    )
};

export default ContentSection;