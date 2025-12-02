const dataset = JSON.parse(JSON.stringify(require('../utils/testdata.json')))
const test = require('@playwright/test');
const customtest = require('../utils/test-base')
// test module is imported from playwright package
/*test('login verification',({browser}) =>
{
const context = browser.newContext();
const page = context.newPage();
//await page.goto('https://www.saucedemo.com/')
page.goto('https://www.saucedemo.com');
  console.log(page.title());
});*/
test('@Web login verification',async({browser}) =>
    //test (description of TC) 
{
const context = await browser.newContext(); // loading the page after opening the browser
const page = await context.newPage(); // creating the page instance in  the browser
await page.goto('https://www.saucedemo.com/') //goto > uses to access the url
const username=dataset[0].username
const password=dataset[0].password
console.log(await page.title())  // To see the title of the page 'swag labs"
//using locator locating unique field element
const usernamefield=await page.locator('#user-name').type(username)
const passwordfield=await page.locator('#password').type(password)
const loginbutton=await page.locator('#login-button').click()
//type and fill are used for feeding values to text area
// type--> will append data to the existing text area
//fill --> will clear the existing text with new value
const identifyfield=await page.locator(".app_logo")
await test.expect(identifyfield).toContainText("Swag Labs")
});

// Invaliduser and valid username, then after error mesg update with valid username
test ('Invaliduser',async({browser}) =>
{
const context = await browser.newContext();
const page = await context.newPage();
const Invalidusername = dataset[1].Invalidusername
const validpassword = dataset[1].validpasswrod
await page.goto('https://www.saucedemo.com/') 
console.log(await page.title()) 
const usernamefield=await page.locator('#user-name') 
await usernamefield.type("user") //chaining of actions or commands line 38,39
const passwordfield=await page.locator('#password').type("secret_sauce")
await page.pause()
const loginbutton=await page.locator('#login-button')
await loginbutton.click()
await test.expect(page.locator("//h3[@data-test='error']")).toContainText("Epic")
await page.pause(); 
await usernamefield.fill("standard_user")
await loginbutton.click()
await page.pause();
const cardtitles = page.locator('.inventory_item_name ');
console.log(await cardtitles.first().textContent()) //>we want to retrive the first one and want to print the text
console.log(await cardtitles.nth(3).textContent());  // based on index value it fetchs the  data
const allTitles = await cardtitles.allTextContents(); // to print all contents
console.log(allTitles);
await test.expect(cardtitles).toHaveCount(6);


//const identifyfield=await page.locator(".app_logo")
//await test.expect(identifyfield).toContainText("Swag Labs")
});

customtest.only('Parameterized data driven',async({page,testDataForOrder})=>{
    //const username=data[0].username
    //const password=data[0].password
    await page.goto('https://demoblaze.com/')
    const loginPage=new LoginPage(page)
    await loginPage.clickLogin()
    await loginPage.enterUsername(testDataForOrder.username)
    await loginPage.enterPassword(testDataForOrder.password)
    await loginPage.login()

    const addToCartPage = new AddtoCartPage(page) 
    addToCartPage.selectMonitor()
    addToCartPage.select_product()
    await page.pause()
    await addToCartPage.addToCartBtn()
    page.on('dialog', dialog => dialog.accept());
    await addToCartPage.selectCart()
    await page.pause()
    await addToCartPage.placeOrderClick()
    await addToCartPage.addcustomername()
    await addToCartPage.addcountry()
    await addToCartPage.addcity()
    await addToCartPage.addCreditCardData()
    await addToCartPage.addMonth()
    await addToCartPage.addYear()
    await addToCartPage.purchaseProduct()
});
