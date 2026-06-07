const {test, expect} = require("@playwright/test")

test("Import Multiple Files", async({page})=>{
    await page.goto("https://html-file-upload.netlify.app/multiple/")
    await page.waitForTimeout(3000)
    await page.locator("css=#file-uploader").setInputFiles(["./uploads/Deployment_Logs.txt","./uploads/HTML_Learning.txt"])
    await page.waitForTimeout(3000)
    expect(await page.locator("css=#feedback")).toHaveText("2 file(s) uploaded successfully!")
    await page.waitForTimeout(3000)
})