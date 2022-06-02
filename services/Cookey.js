const puppeteer = require('puppeteer');
const getRandomUserAgent = require('../utils/getRandomUserAgent');

const getCookies = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const userAgent = getRandomUserAgent();
    page.setUserAgent(userAgent)

    const response = await page.goto(url);

    const status = response.status();
    const cookies = await page.cookies();

    browser.close()
    return {
        status: 'SUCCEED',
        cookies,
        cookiesString: cookies.map(cookie => `${cookie.name}=${cookie.value}`).join(';')
    }

}

module.exports = {
    getCookies
}