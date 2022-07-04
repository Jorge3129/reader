import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {PageMenu, TextStyle} from "./styles";
import {useSection} from "../../../hooks/reader/useSection";
import SectionLink from "../content-table/SectionLink";
import {CopyButton} from "../../reusable/icons/IconButtons";
import SectionText from "./SectionText";
import {useKeyNavigation} from "../../../hooks/reader/useKeyNavigation";
import {useReader} from "../../../hooks/reader/useReader";
import {splitTextIntoLines} from "../../../utils/text/text.functions";

interface IProps {

}

const TextContainer: FC<IProps> = () => {

    useKeyNavigation()
    const {section} = useReader()
    const [page, setPage] = useState<number>(0)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setPage(0)
        if (scrollRef.current) scrollRef.current.scrollTo({top: 0})
    }, [section])

    const PAGE_SIZE = 50;
    const START = page ? PAGE_SIZE * (page - 1) : 0;
    const END = PAGE_SIZE * (page + 1)


    const sectionLines = useMemo(() => {
        return section && splitTextIntoLines(section.textContent)
            .slice(0, END)
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
                <SectionText lineList={sectionLines}/>
                <PageMenu>
                    {!section.first && <SectionLink className={"next_section_link"} section={section}
                                                    step={-1}>&lt; Prev</SectionLink>}
                    {!section.last &&
                        <SectionLink className={"next_section_link"} section={section} step={1}>Next &gt;</SectionLink>}
                    <CopyButton onClick={async e => {
                        const copiedText = sectionLines?.join('\n') || '';
                        await navigator.clipboard.writeText(copiedText)
                        alert(`Copied to clipboard: \n"${copiedText.slice(0, 30)}..."`)
                    }}/>
                </PageMenu>
            </div>
        </TextStyle>
    );
};

export default TextContainer;