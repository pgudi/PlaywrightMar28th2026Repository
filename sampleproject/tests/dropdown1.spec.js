const {test, expect} = require("@playwright/test")
test("Select Items from Drop Down", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(3000)
    await page.locator("css=#tools").selectOption({label:"Selenium WebDriver"})
    await page.waitForTimeout(3000)
    await page.locator("css=#tools").selectOption({value:"rc"})
    await page.waitForTimeout(3000)
    await page.locator("css=#tools").selectOption({index:1})
    await page.waitForTimeout(3000)
    const content=await page.locator("css=#tools").textContent()
    console.log("Content :"+content);
    await expect(content.includes("Selenium IDE")).toBeTruthy()
})