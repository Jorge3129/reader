import {Page} from 'puppeteer';
import {launch} from "./index";

const URL = 'https://www.thelatinlibrary.com/';

const chooseAuthor = (author: string) => async (page: Page) => {
    const link = await page.$$eval("p table tbody tr td a",
        (elements, search) => elements
            .filter(item => item.textContent === search)
            .map(item => item.getAttribute("href")),
        author)
    // @ts-ignore
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

const exec = (author: string, book: number) => async (page: Page) => {
    const authorLink = await chooseAuthor(author)(page);
    const bookLinks = await chooseBook(page, authorLink)
    // @ts-ignore
    return await scrapeBook(page, bookLinks[book] || "")
}

export const scrape  = async (author: string, book: number) => await launch(URL, exec(author, book))
