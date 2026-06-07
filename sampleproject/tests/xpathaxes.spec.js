const {test, expect} = require("@playwright/test")

test("XPATH Axes using following-sibling", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//td[text()='Sachin Tendulkar']/following-sibling::td/following-sibling::td/following-sibling::td/following-sibling::td/input").fill("25000")
    await page.waitForTimeout(2000)
})

test("XPATH Axes using following", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//td[text()='Sachin Tendulkar']/following::tr[1]/td[6]/input").fill("15000")
    await page.waitForTimeout(2000)
})

test("XPATH Axes using preceding-sibling", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//td[text()='Indian Freedom Fighter']/preceding-sibling::td[1]/preceding-sibling::td[1]/input").click()
    await page.waitForTimeout(2000)
})

test("XPATH Axes using preceding", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//td[text()='Sachin Tendulkar']/preceding::tr[1]/preceding::tr[1]/td[1]/input").click()
    await page.waitForTimeout(2000)
})

test("XPATH Axes using ancestor", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(2000)
    const attributevalue=await page.locator("xpath=//input[@id='edit3']/ancestor::td/ancestor::tr/ancestor::table").getAttribute("id")
    console.log("Table Attribute id :"+attributevalue)
    await page.waitForTimeout(2000)
})

test.only("XPATH Axes using descendant", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//table[@id='tbl1']/descendant::tr[4]/td[6]/input").fill("17000")
    await page.waitForTimeout(2000)
})