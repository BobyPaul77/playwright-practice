const test = require('@playwright/test')
test('blaze test',async({browser}) =>
{
const context1 = await browser.newContext();
const page = await context1.newPage();
await page.goto("https://www.demoblaze.com/")
await page.click('//a[@id="login2"]')
});