const {test, expect} = require("@playwright/test")

test("Tabbed Brwosers or Child Browsers or Popup Browsers", async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)

    const [newPage]=await Promise.all(
        [
            context.waitForEvent("page"),
            page.locator("//a[text()='actiTIME Inc.']").click()
        ]
    )

    const url=await newPage.url()
    console.log("URL of New Tabbed Web Page :"+url)
    const title=await newPage.title()
    console.log("URL of New Tabbed Web Page :"+title)
    await newPage.locator("//a[text()='Contact Sales']").click()
    await newPage.waitForTimeout(3000)
    await newPage.locator("//input[@id='first-name']").fill("Santosh")
    await newPage.waitForTimeout(2000)
    await newPage.close()
    await page.locator("//input[@id='username']").fill("testadmin")
    await page.waitForTimeout(2000)
})