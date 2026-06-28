import {test, expect} from '@playwright/test'
import {LoginPage} from './../pages/loginpage'
import {HomePage} from './../pages/homepage'

test("Login Logout functionality using Page Object Model", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    //Create Page Objects
    let login=new LoginPage(page)
    let home=new HomePage(page)

    //Login and Logout Action
    await login.setUserNameTextField("pgudi")
    await login.setPasswordTextField("pgudi")
    await login.clickSignInButton()
    await page.waitForTimeout(3000)
    //Validation
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
    await home.clickLogoutButton()
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login")
})