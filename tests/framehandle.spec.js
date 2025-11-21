//frame handling
const test = require('@playwright/test')
test('frame handling',async({page}) =>
{
await page.goto("https://demoqa.com/frames")
const iframelocator = await page.locator('//iframe[@id="frame1"]')
console.log(await iframelocator.locator("#sampleHeading").textContent())
await page.pause()

});
