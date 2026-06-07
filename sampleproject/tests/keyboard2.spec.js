const { test, expect } = require("@playwright/test")

test("Login Operation using Keyboard", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Tab")
    await page.keyboard.type("pgudi")
    await page.keyboard.press("Tab")
    await page.keyboard.type("pgudi")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
})