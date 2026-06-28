import {test, expect} from '@playwright/test'

test("Login functionality", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.locator("//input[@name='username']").fill("pgudi")
    await page.locator("//input[@name='password']").fill("pgudi")
    await page.locator("//button[text()='Sign In']").click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
    await expect(page).toHaveTitle("S G Software Testing Institute")
})