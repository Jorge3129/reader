import {scrape} from "./scrape";

export const removeSpaces = (arr: Array<any>) =>
    arr.filter(p => Object.keys(p).length !== 0)
        .map(p => ({...p, content:
                p.content.replace(/([\f\n\r\t\v])+/gi, "")
        }))
        .map(p => ({...p, content:
                p.content.replace(/(&nbsp;)+<font.+<\/font>/gi, "")
        }))
        .slice(0, -1)

export const reduceToSections = (arr: Array<any>) =>
    arr.reduce((acc, p, i) => {
        if (p.type === "title") return [...acc, {title: p.content, paragraphs: []}]
        const last = acc.at(-1);
        if (!last) return acc;
        console.log(p)
        const pgs = last.paragraphs;
        return [...acc.slice(0, -1), {...last, paragraphs: [...pgs, p.content]}]
    }, []);

export const breakByLines = (arr: Array<any>) =>
    arr.map(section => ({...section, paragraphs:
        section.paragraphs.map((p: any) =>  p.split("<br/>"))
    }));

(async () => {
    console.log('lpihoub')
    const res = breakByLines(reduceToSections(removeSpaces(await scrape())))
    console.log(res)
})()