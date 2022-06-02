const puppeteer = require('puppeteer');
const getRandomUserAgent = require('../uitls/getRandomUserAgent');

const getCookies = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const userAgent = getRandomUserAgent();
    page.setUserAgent(userAgent)

    const response = await page.goto(url);


    browser.close();

    return response.statusText
}

module.exports = {
    getCookies
}