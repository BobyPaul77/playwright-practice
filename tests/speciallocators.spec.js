//playwright special locators
const test = require('@playwright/test')
test('playwright special locators',async({page}) =>
{
await page.goto("https://selenium.qabible.in/check-box-demo.php")
await page.getByLabel('Click on this check box').click()
await page.pause()
await page.goto("https://selenium.qabible.in/simple-form-demo.php")
await page.getByPlaceholder('Message').fill('Hello')
await page.pause()
await page.getByRole('button', { name: 'Show Message' }).click();// tagname, {name:text}
await page.pause()
});