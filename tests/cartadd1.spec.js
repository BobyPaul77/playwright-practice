const {test,expect} = require('@playwright/test');
const Login = require('../page-objects/Login');
const Dashboard = require('../page-objects/Dashboard');
const Summary = require('../page-objects/Summary');
const dataset = JSON.parse(JSON.stringify(require('../utils/testdata.json'))) // json syntax
test.only('cartadd',async({browser}) =>
{
const context = await browser.newContext();
const page = await context.newPage();
console.log(await page.title()) 
const username=dataset.username
const password =dataset.password
const login = new Login(page)  // in constructor we given as page
await login.goto()
await login.enterusername(username);
await login.enterpassword(password);
await login.loginbuttonclick();
const dashboard = new Dashboard(page)
dashboard.addItem()
dashboard.itemCount()
dashboard.cartsIcon()
const summary = new Summary(page)
summary.checkOutButton()
summary.customerfn("Tom")
await page.pause()
summary.customerln("Mark")
await page.pause()
summary.customerpostcode('567821')
await page.pause()
summary.continuebutton()
await page.pause()
summary.finishbutton()
await page.pause()
await expect(page.locator('//h2[@class="complete-header"]')).toHaveText('Thank you for your order!')
await page.pause()
summary.backhomebutton()
await page.pause()
});