const puppeteer = require('puppeteer');

module.exports = async (view) => {
    const proxyUrl = 'http://gate.smartproxy.com:7000';
    const username = '****';
    const password = '****';
    const target = 'https://www.youtube.com/watch?v=WDhXR-7HJAY';

    const browser = await puppeteer.launch({
        args: [`--proxy-server=${proxyUrl}`],
        // headless: false,
    });

    const page = await browser.newPage();

    await page.authenticate({ username, password });
    await page.goto(target);
    // const html = await page.$eval('body', e => e.innerHTML);
    // console.log(html);
    await browser.close();
    console.log(view)
}
