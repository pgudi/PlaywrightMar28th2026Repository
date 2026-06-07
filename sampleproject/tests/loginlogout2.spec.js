const {test, expect} = require("@playwright/test")

test("Login and Logout functioanlity", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    //Login Action
    await page.locator("input[name='username']").fill("pgudi")
    await page.locator("//input[@name='password']").fill("pgudi")
    await page.locator("(//button[normalize-space()='Sign In'])[1]").click()
    await page.waitForTimeout(3000)
    await page.locator("//button[normalize-space()='Logout']").click()
    await page.waitForTimeout(3000)
})