const {test, expect} = require("@playwright/test")

test("Mouse Operation using Hover function", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)
    await page.locator("//span[@id='nav-link-accountList-nav-line-1']").hover()
    await page.waitForTimeout(3000)
    await page.locator("//span[text()='Baby Wishlist']").click()
    await page.waitForTimeout(3000)
})

test.only("Mouse Operation using Scroll function", async({page})=>{
    await page.goto("https://www.w3schools.com/")
    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Learn CSS']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(5000)
    await page.locator("//a[text()='Learn CSS']").click()
    await page.waitForTimeout(3000)
})