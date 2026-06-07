const {test, expect} = require("@playwright/test")
let page;
let context;
test.beforeAll(async({browser})=>{
    context=await browser.newContext()
    page=await context.newPage()
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
})

test.afterAll(async()=>{
    await page.close()
    await context.close()
})

test("Login functionality testcase", async()=>{
    
    await page.locator('input[name="username"]').fill("pgudi")
    await page.locator('input[name="password"]').fill("pgudi")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
    await page.waitForTimeout(3000)
})

test("Logout functionality Testcase",async()=>{
    await page.locator("//button[normalize-space()='Logout']").click()
    await expect(page).toHaveTitle("S G Software Testing Institute")
    await page.waitForTimeout(3000)
})
