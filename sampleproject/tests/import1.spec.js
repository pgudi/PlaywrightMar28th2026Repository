const {test, expect} = require("@playwright/test")

test("Import Single File",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='file-upload']").setInputFiles("C:/PlaywrightQAAutomation1/CurrentWorkSpace/PlaywrightMar28th2026Repository/sampleproject/uploads/Deployment_Logs.txt")
    await page.waitForTimeout(3000)
    await page.locator("css=#file-submit").click()
    await page.waitForTimeout(3000)
    expect(await page.locator("xpath=//h3")).toHaveText("File Uploaded!")
    const filename=await page.locator("#uploaded-files").textContent()
    expect(filename.includes(".txt")).toBeTruthy()
})