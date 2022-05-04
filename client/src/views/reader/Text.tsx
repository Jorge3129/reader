import React, {Dispatch, FC, SetStateAction, MouseEvent} from 'react';
import {PageButton, PageMenu, Paragraph, TextStyle, Word} from "./styles";
import {useSection} from "../../hooks/useReader";
import {useDictionary} from "../../hooks/useDictionary";

interface IProps {

}

interface LineAcc {
    arr: JSX.Element[],
    ix: number
}


const Text: FC<IProps> = () => {

    const {chooseSection, section, content} = useSection()
    const {searchWord} = useDictionary()

    if (!section) return <TextStyle/>;

    const turnPage = (e: MouseEvent<HTMLButtonElement>, next: boolean) => {
        if (!content || !section?.uid) return;
        const index = next ? section.uid + 1 : section.uid - 1;
        const newSection = content[index];
        if (!newSection) return;
        chooseSection(newSection);
    }

    const lineAcc: LineAcc = {arr:[], ix: 0};

    return (
        <TextStyle>
            <h2>{section.title}</h2>
            <ul>
                {section.content.split("\n\n")
                    .reduce((acc: LineAcc ,p: string, i: number) => {
                        const arr = acc.arr.concat(<> {
                                p.split("\n")
                                    .filter(line => line)
                                    .map((line, lineIx) => <div key={line}>{
                                        line.split(" ")
                                            .map((word, wordIx) => word &&
                                                <Word onClick={e => searchWord(word)}
                                                      key={word + wordIx}
                                                >{word}</Word>)
                                    } <b style={{color: "blue"}}>{ (++acc.ix) % 5 === 0 && (acc.ix)}</b></div>)
                            }<br/></>)

                        return {
                            arr,
                            ix: acc.ix
                        }
                    }, lineAcc).arr
                }
            </ul>
            <PageMenu>
                <PageButton onClick={e => turnPage(e, false)}>&lt; Prev</PageButton>
                <PageButton onClick={e => turnPage(e, true)}>Next &gt;</PageButton>
                <PageButton onClick={e => navigator.clipboard.writeText(section.content)}>Copy</PageButton>
            </PageMenu>
        </TextStyle>
    );
};

export default Text;