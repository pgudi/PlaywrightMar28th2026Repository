class LoginPage{
    constructor(page){
        this.page=page
        this.txtusername="//input[@name='username']"
        this.txtpassword="//input[@name='password']"
        this.btnsignin="//button[text()='Sign In']"
    }

    async setUserName(username){
        await this.page.fill(this.txtusername, username)
    }

    async setPassword(password){
        await this.page.fill(this.txtpassword, password)
    }

    async clickSignInButton(){
        await this.page.click(this.btnsignin)
    }
}

module.exports={LoginPage}