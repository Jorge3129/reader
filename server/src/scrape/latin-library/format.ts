import {scrape, scrapeMany} from "./scrape";
import path from 'path'
import fs from "fs";
import {stringify, stringifyLucr} from "./string";

export const removeSpaces = (arr: Array<any>) =>
    arr.filter(p => Object.keys(p).length !== 0)
        .map(p => ({...p, content: p.content.replace(/(&nbsp;)+<font.+<\/font>/gi, "")}))
        .map(p => ({...p, content: p.content.replace(/&nbsp;/gi, " ")}))
        .map(p => ({...p, content: p.content.replace(/<br>/gi, "")}))
        .map(p => ({...p, content: p.content.replace(/^[\n\r]*/g, '')}))
        .slice(0, -1)

export const reduceToSections2 = (arr: Array<any>) =>
    arr.reduce((acc, p, i) => {
        if (p.type === "title") return [...acc, {title: p.content, content: ""}]
        const last = acc.at(-1);
        if (!last) return acc;
        return [...acc.slice(0, -1), {...last, content: last.content + "" + p.content}]
    }, []);

export const reduceToSectionsLucr = (arr: Array<any>) => arr.slice(1).map(p => p.content).join('\n\n');


(async () => {
    console.log('lpihoub')
    const books = await scrapeMany("Lucretius", 6);
    await fs.writeFile(`lucr.ts`, "export const lucr: Book[] = [ ", (err) => {if (err) console.log(err)})
    let i = 1;
    // await Promise.all(new Array(6).map(async (book, i): Promise<void> => {
    //     const spaces = removeSpaces(book);
    //     const sectionBook = reduceToSectionsLucr(spaces)
    //     await fs.appendFile(`lucr.ts`, stringifyLucr(sectionBook, i), (err) => {if (err) console.log(err)})
    // }));
    for await (const book of books) {
        const spaces = removeSpaces(book);
        const sectionBook = reduceToSectionsLucr(spaces)
        await fs.appendFile(`lucr.ts`, stringifyLucr(sectionBook, i), (err) => {if (err) console.log(err)})
        i++;
    }
    //await fs.appendFile(`lucr.ts`, "]", (err) => {if (err) console.log(err)})
})()