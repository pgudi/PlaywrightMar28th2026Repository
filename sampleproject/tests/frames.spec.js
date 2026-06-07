const {test, expect} = require("@playwright/test")

test("Handling Frames", async({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    await page.waitForTimeout(3000)
    const oFrame1=await page.frameLocator("//frame[@name='packageListFrame']")
    await oFrame1.locator("(//a[text()='java.awt'])[1]").click()
    await page.waitForTimeout(3000)
    //handle Second Frame
    const oFrame2=await page.frameLocator("//frame[@name='packageFrame']")
    await oFrame2.locator("//a/span[text()='ActiveEvent']").click()
    await page.waitForTimeout(3000)
    //handle Third Frame
    const oFrame3=await page.frameLocator("//frame[@name='classFrame']")
    const content=await oFrame3.locator('xpath =/html/body/div[4]/div[1]/ul/li/div').textContent()
    console.log(content);
    await page.waitForTimeout(3000)
})