const {test, expect} = require("@playwright/test")
const {LoginPage} = require("./../pages/loginpage")
const {HomePage} = require("./../pages/homepage")

test("Login and Logout functionality using POM", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    //Login Action
    const login=new LoginPage(page)
    await login.setUserName("pgudi")
    await login.setPassword("pgudi")
    await login.clicksignIn()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
    //Logout Action
    const home=new HomePage(page)
    await home.clickLogout()
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login")
    await page.waitForTimeout(3000)
})