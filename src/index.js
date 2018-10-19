const puppeteer = require("puppeteer");
(async () => {
  async function gotoAndClick(page, url, selector) {
    await page.goto(url);
    await page.waitForSelector(selector);
    await page.click(selector);
  }
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
  });
  // browser.on('targetcreated', async(target) => {
  //   console.log(`Created target type ${target.type()} url ${target.url()}`);
  //   if (target.type() !== 'page') {
  //     return;
  //   } else {
  //     var page = await target.page();
  //   }
  //   // await page.waitForSelector('#SomeSelector');
  // });
  
  //LOGIN
  // await page.setViewport({ width: 1680, height: 923 })
  
  // const pages = await browser.pages()
  //   await pages[0].goto('https://usepanda.com/app/#/')
  // // const pages = await browser.pages();  
  // const navigationPromise = pages[0].waitForNavigation()
  
  // await pages[0].waitForSelector('.pro-overlay > .pro-container > .pro-subpage > .onboarding-welcome-buttons > .pndCommon-button--twitter')
  // await pages[0].click('.pro-overlay > .pro-container > .pro-subpage > .onboarding-welcome-buttons > .pndCommon-button--twitter')
  
  // await navigationPromise
  
  // await pages[0].type('.auth > #oauth_form > .sign-in > .row > #username_or_email', 'alechp')

  // await pages[0].type('.auth > #oauth_form > .sign-in > .row > #password', 'bDw8eCvLYE2YZ@3btcMd')
  
  // await pages[0].waitForSelector('#bd > .auth > #oauth_form > .buttons > #allow')
  // await pages[0].click('#bd > .auth > #oauth_form > .buttons > #allow')
  
  // await navigationPromise
  
  // await navigationPromise
  
  // await navigationPromise
  
  // await pages[0].waitForSelector('.pro-overlay > .pro-container > .pro-subpage > .pro-subpage-description > a')
  // await pages[0].click('.pro-overlay > .pro-container > .pro-subpage > .pro-subpage-description > a')
 
  //Login
  const page = await browser.newPage()
  await page.goto('https://usepanda.com/app/#/')
  // const pages = await browser.pages();  
  const navigationPromise = page.waitForNavigation()
  
  await page.waitForSelector('.pro-overlay > .pro-container > .pro-subpage > .onboarding-welcome-buttons > .pndCommon-button--twitter')
  await page.click('.pro-overlay > .pro-container > .pro-subpage > .onboarding-welcome-buttons > .pndCommon-button--twitter')
  
  await navigationPromise
  
  await page.type('.auth > #oauth_form > .sign-in > .row > #username_or_email', 'alechp')

  await page.type('.auth > #oauth_form > .sign-in > .row > #password', 'bDw8eCvLYE2YZ@3btcMd')
  
  await page.waitForSelector('#bd > .auth > #oauth_form > .buttons > #allow')
  await page.click('#bd > .auth > #oauth_form > .buttons > #allow')
  
  await navigationPromise
  
  await navigationPromise
  
  await navigationPromise
  
  await page.waitForSelector('.pro-overlay > .pro-container > .pro-subpage > .pro-subpage-description > a')
  await page.click('.pro-overlay > .pro-container > .pro-subpage > .pro-subpage-description > a')
 

//Click stuff
  await page.waitForSelector('.entry-row:nth-child(1) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  await page.click('.entry-row:nth-child(1) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')

  await navigationPromise
  await page.bringToFront();


  await page.waitForSelector('.entry-row:nth-child(2) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  await page.click('.entry-row:nth-child(2) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')

  await navigationPromise
  await page.bringToFront();

  await page.waitForSelector('.entry-row:nth-child(3) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  await page.click('.entry-row:nth-child(3) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')

  await navigationPromise
  await page.bringToFront();
  
  await page.waitForSelector('.entry-row:nth-child(4) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  await page.click('.entry-row:nth-child(4) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')

  await navigationPromise
  await page.bringToFront();
  
  await page.waitForSelector('.entry-row:nth-child(5) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  await page.click('.entry-row:nth-child(5) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
  await navigationPromise
  await page.bringToFront();
  
  await page.waitForSelector('.entry-row:nth-child(6) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  await page.click('.entry-row:nth-child(6) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
  await navigationPromise
  await page.bringToFront();
  
  await page.waitForSelector('.entry-row:nth-child(7) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  await page.click('.entry-row:nth-child(7) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
  await navigationPromise
  await page.bringToFront();
  
  await page.waitForSelector('.entry-row:nth-child(8) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  await page.click('.entry-row:nth-child(8) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
  await navigationPromise
  await page.bringToFront();
  
  await page.waitForSelector('.entry-row:nth-child(9) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  await page.click('.entry-row:nth-child(9) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
  await navigationPromise
  await page.bringToFront();
  
  await navigationPromise
  
  await navigationPromise
  
  await navigationPromise
  
  await navigationPromise
  
  await navigationPromise
  
  await navigationPromise
  
  await navigationPromise
  
  await navigationPromise
  
  // await browser.close()

})();
//OPEN ISH
// await Promise.all([
//     gotoAndClick(pages[0], 'https://usepanda.com/app/#/', '.entry-row:nth-child(1) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link'),
//     gotoAndClick(pages[0], 'https://usepanda.com/app/#/', '.entry-row:nth-child(2) > div > div > .js-pnd-article > .text-entry-content > .article-details > .detail-item:nth-child(2) > ng-pluralize')
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//     // gotoAndClick(pages[0], 'https://usepanda.com/app/#/', );
//   ]);

//   await pages[0].waitForSelector('.entry-row:nth-child(1) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(1) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
//   await pages[0].bringToFront();  
//   await pages[0].waitForSelector('.entry-row:nth-child(2) > div > div > .js-pnd-article > .text-entry-content > .article-details > .detail-item:nth-child(2) > ng-pluralize')
//   await pages[0].click('.entry-row:nth-child(2) > div > div > .js-pnd-article > .text-entry-content > .article-details > .detail-item:nth-child(2) > ng-pluralize')
  
//   await pages[0].waitForSelector('.entry-list-container > .entry-row > div > div > .pnd-article-campaign')
//   await pages[0].click('.entry-list-container > .entry-row > div > div > .pnd-article-campaign')
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('div > .pnd-article-campaign > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('div > .pnd-article-campaign > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(4) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(4) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(5) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(5) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(6) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(6) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(7) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(7) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(8) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(8) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(9) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(9) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(10) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(10) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(11) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(11) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(12) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(12) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(13) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(13) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(15) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(15) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(14) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(14) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(16) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(16) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(17) > div > div > .js-pnd-article > .text-entry-content > .article-title')
//   await pages[0].click('.entry-row:nth-child(17) > div > div > .js-pnd-article > .text-entry-content > .article-title')
  
//   await pages[0].waitForSelector('.entry-row:nth-child(18) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(18) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(18) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(18) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(19) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(19) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(20) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(20) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   await navigationPromise
  
//   await pages[0].waitForSelector('.entry-row:nth-child(21) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
//   await pages[0].click('.entry-row:nth-child(21) > div > div > .js-pnd-article > .text-entry-content > .article-title > .article-title-link')
  
//   // await navigationPromise
  
//   // await navigationPromise
  
//   // await navigationPromise
  
//   // await navigationPromise

// })();
