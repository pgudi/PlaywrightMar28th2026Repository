const {test, expect} = require("@playwright/test")
test("Select Multiple Items from Drop Down", async({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.waitForTimeout(3000)
    await page.locator("css=#cars").scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
    await page.locator("css=#cars").selectOption(["Opel","Audi"])
    //await page.locator("css=#cars").selectOption(["opel","audi"])
    await page.waitForTimeout(3000)
    
})