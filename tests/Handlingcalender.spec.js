//handling calenders
import {test,expect} from '@playwright/test'
 //const year=1997
test('calendar validation',async({page})=>
    {
     await page.goto('https://selenium.qabible.in/index.php');

     await page.getByRole('link',{name:'Date Pickers'}).click();
     await page.getByText('Bootstrap Date Picker').click();

     // Wait for the page to load and element to be visible
await page.waitForLoadState('networkidle');
await page.locator('input.form-control.datepicker').waitFor({ state: 'visible' });


await page.locator('#single-input-field').click();
   //  await page.getByLabel('Enter Date').click();  
await page.pause()
    // Click month/year header to switch to months view
await page.locator('.datepicker-switch').nth(0).click();
await page.locator("//table[@class='table-condensed']/tbody/tr[1]/td[3]").click() //tr= table row, td= table data(column)
await page.pause()
await page.locator("//button[@id='button-one' and @class='btn btn-primary']").click()
await page.pause()
});
