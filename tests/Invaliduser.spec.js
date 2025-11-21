const test = require('@playwright/test');
const dataset = JSON.parse(JSON.stringify(require('../utils/parameterizedtestdata')))
for (const data of dataset){
test(`Invaliduser for ${data.username},${data.password}`, async ({browser }) => {
const context1 = await browser.newContext();
const page1 = await context1.newPage();
await page1.goto('https://www.saucedemo.com/') 
console.log(await page1.title()) 
const usernamefield=await page1.locator('#user-name')//.type("user")
const passwordfield=await page1.locator('#password')//.type("secret_sauce")
const loginbutton=await page1.locator('#login-button')//.click()
await usernamefield.fill(data.username);
//await usernamefield.fill(data.username1); //for retry execution
await passwordfield.fill(data.password);
await loginbutton.click()
//loginbutton.click(alert)
//console.log()
//const identifyfield=await page.locator(".app_logo")
//await test.expect(identifyfield).toContainText("Swag Labs")
})
};