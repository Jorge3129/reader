import {scrape} from "./scrape";
import path from 'path'
import fs from "fs";
import {stringify} from "./string";

export const removeSpaces = (arr: Array<any>) =>
    arr.filter(p => Object.keys(p).length !== 0)
        .map(p => ({...p, content:
                p.content.replace(/(&nbsp;)+<font.+<\/font>/gi, "")
        }))
        .map(p => ({...p, content:
                p.content.replace(/&nbsp;/gi, " ")
        }))
        .map(p => ({...p, content:
                p.content.replace(/<br>/gi, "")
        }))
        .slice(0, -1)

export const reduceToSections = (arr: Array<any>) =>
    arr.reduce((acc, p, i) => {
        if (p.type === "title") return [...acc, {title: p.content, paragraphs: []}]
        const last = acc.at(-1);
        if (!last) return acc;
        const pgs = last.paragraphs;
        return [...acc.slice(0, -1), {...last, paragraphs: [...pgs, p.content]}]
    }, []);

export const reduceToSections2 = (arr: Array<any>) =>
    arr.reduce((acc, p, i) => {
        if (p.type === "title") return [...acc, {title: p.content, content: ""}]
        const last = acc.at(-1);
        if (!last) return acc;
        return [...acc.slice(0, -1), {...last, content: last.content + ""  + p.content}]
    }, []);

(async () => {
    console.log('lpihoub')
    const res = reduceToSections2(removeSpaces(await scrape("Horace", 5)))
    await fs.writeFile("carm4.ts", stringify(res), (err) => {
        if (err) console.log(err)
    })
})()