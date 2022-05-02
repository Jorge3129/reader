import {Page} from 'puppeteer';
import {launch} from "../index";
import {write} from "../utils/write";

const URL = 'https://www.thelatinlibrary.com/';

const chooseAuthor = (author: string) => async (page: Page) => {
    const link = await page.$$eval("p table tbody tr td a",
        (elements, search) => elements
            .filter(item => item.textContent === search)
            .map(item => item.getAttribute("href")),
        author)
    return link[0] || "";
}

const chooseBook = async (page: Page, link: string) => {
    await page.goto(URL + link)
    return await page.$$eval(".work table tbody tr td a",
        items => items.map(item => item.getAttribute("href")));
}

const scrapeBook = async (page: Page, link: string) => {
    await page.goto(URL + link)
    return await page.$$eval("p", items =>
        items.map(p => {
            if (p.classList.contains("border") || p.classList.contains("shortborder"))
                return {}
            if ([...p.children].find(ch => ch.tagName === "B")) return {
                type: "title",
                content: [...p.children][0].innerHTML
            }
            return {
                type: "text",
                //children: [...p.children].map(c => c.tagName),
                content: p.innerHTML
            };
        })
    )
}

const exec = (author: string) => async (page: Page) => {
    const authorLink = await chooseAuthor(author)(page);
    const bookLinks = await chooseBook(page, authorLink)
    return await scrapeBook(page, bookLinks[2] || "")
}

// (async () => console.log(await launch(URL,
//         exec("Horace"))
//     )
// )()

export const scrape  = async () => await launch(URL, exec("Horace"))

const saveBook = async (page: Page, link: string) => {
    const html = await page.$eval("body", el => el.innerHTML)
    await write('text/carm1.html', html)
}