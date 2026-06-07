
class LoginPage{
    constructor(page){
        this.page=page
        this.txtusername=page.locator("//input[@name='username']")
        this.txtpassword=page.locator("//input[@name='password']")
        this.btnsignin=page.locator("//button[text()='Sign In']")
    }

    async setUserName(username){
        await this.txtusername.fill(username)
    }

    async setPassword(password){
        await this.txtpassword.fill(password)
    }

    async clicksignIn(){
        await this.btnsignin.click()
    }
}

module.exports={LoginPage}