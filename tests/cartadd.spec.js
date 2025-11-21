const {test,expect} = require('@playwright/test');
test.only('cartadd',async({browser}) =>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.saucedemo.com/') 
console.log(await page.title()) 
const usernamefield=await page.locator('#user-name') 
await usernamefield.type("standard_user") //chaining of actions or commands line 38,39
const passwordfield=await page.locator('#password').type("secret_sauce")
await page.pause()
const loginbutton=await page.locator('#login-button')
await loginbutton.click()
const addcart =await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]')
await addcart.click()
const count1=await page.locator('//span[@class="shopping_cart_badge"]')
console.log(count1)
const cart1 = await page.locator('//a[@class="shopping_cart_link"]')
await cart1.click()
await page.pause()
const checkout = await page.locator("//button[@id='checkout']")
await checkout.click()
const name= await page.locator('//input[@id="first-name"]')
await name.type('Tom')
const last=await page.locator('//input[@id="last-name"]')
await last.type('thomas')
const zip = await page.locator('//input[@id="postal-code"]')
await zip.type('654321')
const continue1 =await page.locator('//input[@id="continue"]')
await continue1.click()
const finish = await page.locator('//button[@id="finish"]')
await finish.click()
await expect(page.locator('//h2[@class="complete-header"]')).toHaveText('Thank you for your order!')

/*const login = new Login(page)  // in constructor we given as page
login.goto()
login.enterusername("standard_user");
login.enterpassword("secert_sauce");
login.loginbuttonclick();*/
/*const dashboard = new Dashboard(page)
dashboard.addCart()
dashboard.cartCount()
dashboard.cartIcon()*/
/*const Summary = new Summary(page)
Summary.checkOutButton()
Summary.customerfn("Tom")
Summary.customerln("Mark")
Summary.customerpostcode('567821')
Summary.continuebutton()
Summary.finishbutton()*/

////h2[@class="complete-header"]

});