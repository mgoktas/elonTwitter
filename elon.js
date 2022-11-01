const puppeteer = require('puppeteer');


  
  const username = 'rasitozgurfb';
  const password = '5117142';



let browser = null;
let page = null;

(async () => {
    browser = await puppeteer.launch({headless: false})

    page = await browser.newPage()
    page.setViewport({
        width: 960,
        height: 1080,
        isMobile: false
    })

    
    await page.goto('https://twitter.com/login'), ({waitUntil: 'networkidle2'})

    await page.waitForSelector('input[autocomplete="username"]', {visible: true})
    await page.type('input[autocomplete="username"]', username, {delay: 25})
    await page.keyboard.press('Enter')

    await page.waitForSelector('input[autocomplete="current-password"]', {visible: true})
    await page.type('input[autocomplete="current-password"]', password, {delay: 25})
    await page.keyboard.press('Enter')

    
    await page.goto('https://twitter.com/elonmusk'), ({waitUntil: 'networkidle2'})

    console.log(text)


})()