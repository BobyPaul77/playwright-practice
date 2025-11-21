// multiwindow load or popup handling
const test = require('@playwright/test')
test('verify multiwindow',async({page,context})=>
{
await page.goto('https://selenium.qabible.in/window-popup.php')
const popuppromise =context.waitForEvent('page') // waitforEvent --> used to notify that a new page instance is about to occur wait for it.
const button =await page.locator("//a[@title ='Follow @obsqurazone on Facebook']").click()
const popup = await popuppromise
await popup.waitForLoadState() // waitForLoadState--> wait for loading entire UI page or screen
await popup.fill('//span[text()="Email address or phone number"]','test@gmail.com')
//await popup.fill('//span[@id="_r_t_"]')
await page.waitForTimeout(5000)

});