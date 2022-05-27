import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {PageMenu, TextStyle, Word} from "./styles";
import {useSection} from "../../../hooks/reader/useSection";
import {useDictionary} from "../../../hooks/reader/useDictionary";
import SectionLink from "../content-table/SectionLink";
import CopyButton from "../../reusable/CopyButton";
import SectionText from "./SectionText";

interface IProps {

}

const Text: FC<IProps> = () => {

    const {section} = useSection()
    const [page, setPage] = useState<number>(0)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setPage(0)
        if (scrollRef.current) scrollRef.current.scrollTo({top: 0})
    }, [section])


    const sectionTextPage = useMemo(() => {
        return section && section.content
            .split('\n')
            .slice(0, 50 * (page + 1))
            .join('\n')
    }, [section, page])


    const onScroll = () => {
        if (!scrollRef?.current) return;
        const el = scrollRef.current;
        if (el.scrollHeight - el.scrollTop - el.clientHeight < 1) setPage(page + 1)
    }

    if (!section) return <TextStyle/>;

    return (
        <TextStyle>
            <div className="container" ref={scrollRef} onScroll={onScroll}>
                <h2 className="section_title">{section.title}</h2>
                <SectionText sectionTextPage={sectionTextPage}/>
                <PageMenu>
                    {!section.first && <SectionLink className={"next_section_link"} section={section}
                                                    step={-1}>&lt; Prev</SectionLink>}
                    {!section.last &&
                        <SectionLink className={"next_section_link"} section={section} step={1}>Next &gt;</SectionLink>}
                    <CopyButton onClick={async e => {
                        await navigator.clipboard.writeText(section.content)
                        alert(`Copied to clipboard: \n"${section.content.slice(0, 30)}..."`)
                    }}/>
                </PageMenu>
            </div>
        </TextStyle>
    );
};

export default Text;