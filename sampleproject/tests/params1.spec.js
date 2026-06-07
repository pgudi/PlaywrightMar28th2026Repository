const { test, expect } = require("@playwright/test")
const testdata = require("./../datafiles/logindata.json")
const data = require("./../datafiles/multipledata.json")

test("Login and Logout functioanlity", async ({ page }) => {
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    //Login Action
    await page.locator("input[name='username']").fill(testdata.username)
    await page.locator("//input[@name='password']").fill(testdata.password)
    await page.locator("(//button[normalize-space()='Sign In'])[1]").click()
    await page.waitForTimeout(3000)
    await page.locator("//button[normalize-space()='Logout']").click()
    await page.waitForTimeout(3000)
})

test.only("Login and Logout functioanlity with Multiple Test Data", async ({ page }) => {
    for (let i = 0; i < data.length; i++) {
        await page.goto("https://sgtestinginstituteapp.onrender.com/")
        await page.waitForTimeout(1000)
        //Login Action
        await page.locator("input[name='username']").fill(data[i].username)
        await page.locator("//input[@name='password']").fill(data[i].password)
        await page.locator("(//button[normalize-space()='Sign In'])[1]").click()
        await page.waitForTimeout(1000)
        await page.locator("//button[normalize-space()='Logout']").click()
        await page.waitForTimeout(1000)
    }
})





