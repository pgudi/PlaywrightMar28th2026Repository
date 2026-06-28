import {test, expect} from '@playwright/test'

test("Login Functionality using Keyboard", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Tab")
    await page.keyboard.type("pgudi")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Tab")
    await page.keyboard.type("pgudi")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
    await expect(page).toHaveTitle("S G Software Testing Institute")
})