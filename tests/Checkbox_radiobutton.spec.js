// Checkbox validation
const test = require('@playwright/test')
test('Checkbox validation',async({page}) =>
{
await page.goto('https://selenium.qabible.in/check-box-demo.php') 
const formcheckbox =await page.locator("//input[@id='gridCheck']")
await formcheckbox.click()
await page.pause()
});
// Radio button selection
test ('radiobutton selection', async({page})=>
{
await page.goto('https://selenium.qabible.in/radio-button-demo.php')
const radiobutton = await page.locator("//input[@id='inlineRadio1']")
await radiobutton.click()
await page.pause()
const button = await page.locator("//button[@id='button-one']")
await button.click()
await page.pause()
});
// dropdown selection
test.only ('dropdown',async({page})=>
{
await page.goto('https://www.saucedemo.com/')
console.log(await page.title()) 
const usernamefield=await page.locator('#user-name').type("standard_user")
const passwordfield=await page.locator('#password').type("secret_sauce")
const loginbutton=await page.locator('#login-button').click()
const dropdown =await page.locator("//select[@class='product_sort_container']")
//await page.pause()
//await dropdown.selectOption({index:2}) // select by index
//await dropdown.selectOption('za')   // select by value
await dropdown.selectOption({label:'Name (Z to A)'}) // select by visible text
await page.pause()

});