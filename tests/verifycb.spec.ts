const test = require('@playwright/test')
import { Page, Locator } from '@playwright/test';
test('verify checkbox button click', async ({ page }:{page: Page}) => {

    await page.goto('https://selenium.qabible.in/check-box-demo.php');
    const checkBox = page.locator("//input[@id='gridCheck']");
    await checkBox.click();

});
