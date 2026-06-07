const {test, expect} = require("@playwright/test")

test("inbuilt Locators getByRole",async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.getByRole('button', {name:'Sign In'}).click()
    await page.waitForTimeout(2000)
})

test("inbuilt Locators getByText",async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.getByText("Sign In").click()
    await page.waitForTimeout(2000)
})

test("inbuilt Locators getByPlaceholder",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Username").fill("Admin")
    await page.waitForTimeout(2000)
})

test("inbuilt Locators getByAltText",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByText(" Login ").nth(1).click()
    await page.waitForTimeout(3000)
    await page.getByAltText("profile picture").first().click()
    await page.waitForTimeout(3000)
})

test.only("inbuilt Locators getByLabel",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    const pwdLabel=await page.getByLabel("Username")
    await expect(pwdLabel).toHaveText("Username")
    await page.waitForTimeout(2000)
})