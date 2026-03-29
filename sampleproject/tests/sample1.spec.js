const {test, expect} = require('@playwright/test')

test("Launch Application and Validate", async ({page})=>{
    await page.goto("https://www.w3schools.com/")
    await page.waitForTimeout(3000)
})