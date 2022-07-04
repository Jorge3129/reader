import puppeteer from 'puppeteer';

export const launch = async (url: string, fn: Function) => {
    const browser = await puppeteer.launch({
        headless: false,
        //args: ['--headless'],
    });
    const page = await browser.newPage();
    await page.goto(url);
    const result = await fn(page)
    await browser.close();
    return result;
}