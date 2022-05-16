import React, {FC, useMemo} from 'react';
import {PageButton, PageMenu, TextStyle, Word} from "./styles";
import {useSection} from "../../../hooks/reader/useSection";
import {useDictionary} from "../../../hooks/useDictionary";
import SectionLink from "../content-table/SectionLink";

interface IProps {

}

interface LineAcc {
    arr: JSX.Element[],
    ix: number
}

const Text: FC<IProps> = () => {

    const {section} = useSection()
    const {searchWord} = useDictionary()

    const lineAcc: LineAcc = {arr: [], ix: 0};

    const sectionText = useMemo(() => section && section.content.split("\n\n")
        .reduce((acc: LineAcc, p: string, i: number) => {
            const arr = acc.arr.concat(<> {
                p.split("\n")
                    .filter(line => line)
                    .map((line, lineIx) => <div key={line}>{
                        line.split(" ")
                            .map((word, wordIx) => word &&
                                <>
                                    <Word onClick={e => searchWord(word)}
                                          key={word + wordIx}
                                    >{word}</Word>
                                    <span> </span>
                                </>
                            )
                    } <b style={{color: "blue"}}>{(++acc.ix) % 5 === 0 && (acc.ix)}</b></div>)
            }<br/></>)
            return {arr, ix: acc.ix}
        }, lineAcc).arr, [section])

    if (!section) return <TextStyle/>;

    return (
        <TextStyle>
            <div className="container">
                <h2>{section.title}</h2>
                <ul>
                    {sectionText}
                </ul>
                <PageMenu>
                    {!section.first && <SectionLink className={"next_section_link"} section={section} step={-1}>&lt; Prev</SectionLink>}
                    {!section.last && <SectionLink className={"next_section_link"} section={section} step={1}>Next &gt;</SectionLink>}
                    <PageButton onClick={e => navigator.clipboard.writeText(section.content)}>Copy</PageButton>
                </PageMenu>
            </div>
        </TextStyle>
    );
};

export default Text;