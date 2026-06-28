import {test, expect} from '@playwright/test'

test("Invalid Login Validation", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.locator("//input[@name='username']").fill("pgudi123")
    await page.locator("//input[@name='password']").fill("pgudi123")
    await page.locator("//button[text()='Sign In']").click()
    await page.waitForTimeout(3000)
    const errorMesssage=await page.locator("//p[text()='Invalid username or password']").textContent()
    await expect(errorMesssage?.includes("Invalid username")).toBeTruthy()

})