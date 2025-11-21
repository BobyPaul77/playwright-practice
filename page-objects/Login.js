// login class
class Login{
  constructor(page){ // constructor = helps to create an object of the class
        this.page = page;
        this.userName = page.locator('#user-name');
        this.password = page.locator('#password');
        this.login = page.locator("//input[@id='login-button']");  
    }
    async goto(){
        await this.page.goto('https://www.saucedemo.com/') 
    }
    async enterusername(userNameValue){
        const usernamefield=await this.userName.type(userNameValue) 
    }
    async enterpassword(passwordValue){
        const passwordfield=await this.password.type(passwordValue)
    }
    async loginbuttonclick(){
        const loginbutton=await this.login.click()
    }
}
module.exports=Login