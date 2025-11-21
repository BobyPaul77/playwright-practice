//web dialogue handling
const test = require('@playwright/test')
test('web dialogue handling',async({page}) =>
{
await page.goto("https://selenium.qabible.in/index.php")
const alertlink = await page.locator('//a[@id="alert-modal"]').click()
const jshyperlink = await page.locator('//a[@href="javascript-alert.php"]').click()
page.on('dialog',dialog =>dialog.accept()) //if a dialogue pop-up present/displayed in click then same code has to be written before the click button event 
//page.on('dialog',dialog =>dialog.dismiss()) // to gett cancelled same
const jshyperlinkclick =await page.locator('//button[@class="btn btn-warning"]').click()
await page.pause()
});
test.only('frame handling',async({page}) =>
{
await page.goto("https://demoqa.com/frames")
const iframelocator = await page.locator('//iframe[@id="frame1"]')
console.log(await iframelocator.locator("#sampleHeading").textContent())
await page.pause()

});
