import {Page,Locator} from '@playwright/test'

export class LoginPage{
    page!:Page
    txtUserName!:Locator
    txtPassword!:Locator
    btnSignIn!:Locator
    constructor(page:Page){
        this.page=page
        this.txtUserName=page.locator("//input[@name='username']")
        this.txtPassword=page.locator("//input[@name='password']")
        this.btnSignIn=page.locator("//button[text()='Sign In']")
    }

    async setUserNameTextField(username:string){
        await this.txtUserName.fill(username)
    }

    async setPasswordTextField(password:string){
        await this.txtPassword.fill(password)
    }

    async clickSignInButton(){
        await this.btnSignIn.click()
    }
}