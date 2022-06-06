import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {PageMenu, TextStyle} from "./styles";
import {useSection} from "../../../hooks/reader/useSection";
import SectionLink from "../content-table/SectionLink";
import {CopyButton} from "../../reusable/icons/IconButtons";
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

    const PAGE_SIZE = 50;
    const START = page ? PAGE_SIZE * (page - 1) : 0;
    const END = PAGE_SIZE * (page + 1)


    const sectionTextPage = useMemo(() => {
        return section && section.textContent
            .split('\n')
            .slice(0, END)
            .join('\n')
    }, [section, page])


    const onScroll = () => {
        if (!scrollRef?.current) return;
        const el = scrollRef.current;
        if (el.scrollHeight - el.scrollTop - el.clientHeight < 1) setPage(page + 1)
        else if (el.scrollTop < 1 && page !== 0) setPage(page - 1)
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
                        await navigator.clipboard.writeText(section.textContent)
                        alert(`Copied to clipboard: \n"${section.textContent.slice(0, 30)}..."`)
                    }}/>
                </PageMenu>
            </div>
        </TextStyle>
    );
};

export default Text;