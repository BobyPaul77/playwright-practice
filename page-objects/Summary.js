// Summary & Checkout
class Summary{
    constructor(page){ // constructor = helps to create an object of the class
        this.page = page;
        this.CheckOut = page.locator("//button[@id='checkout']");
        this.customerfirstname = page.locator("//input[@id='first-name']");
        this.customerlastname = page.locator("//input[@id='last-name']");  
        this.customerpostal = page.locator("//input[@id='postal-code']");  
        this.continuebtn = page.locator("//input[@id='continue']"); 
        this.finishbtn = page.locator("//button[@id='finish']"); 
        this.backhomebtn = page.locator("//button[@id='back-to-products']"); 
    }
async checkOutButton(){
    await this.CheckOut.click()
}
async customerfn(firstNameValue){
        await this.customerfirstname.fill(firstNameValue) 
     }
async customerln(lastNameValue){
        await this.customerlastname.fill(lastNameValue) 
}
async customerpostcode(postCodeValue){
        await this.customerpostal.fill(postCodeValue) 
}
async continuebutton(){
    await this.continuebtn.click()
}
async finishbutton(){
    await this.finishbtn.click()
}
async backhomebutton(){
    await this.backhomebtn.click()
}
}
module.exports=Summary