const {test, expect} = require("@playwright/test")

test("Absolute XPATH", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=/html/body/div/form/input").first().fill("DemoUser1")
    await page.waitForTimeout(2000)
})

test("Relative XPATH using TagName alone", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input").first().fill("DemoUser2")
    await page.waitForTimeout(2000)
})

test("Relative XPATH using TagName with index", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[2]").first().fill("Welcome123")
    await page.waitForTimeout(2000)
})

test("Relative XPATH using TagName with attributename and value", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[@name='pass1word1']").fill("Welcome456")
    await page.waitForTimeout(2000)
})

test("Relative XPATH using attributename and value", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//*[@name='pass1word1']").fill("Welcome789")
    await page.waitForTimeout(2000)
})

test("Relative XPATH using attribute value alone", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//*[@*='pass1word1']").fill("Welcome098")
    await page.waitForTimeout(2000)
})

test("Relative XPATH using tagName with multiple attribute name nad value", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[@type='checkbox'][@id='chk2linux']").click()
    await page.waitForTimeout(2000)
})

test("Relative XPATH using tagName with multiple attribute name nad value by and operator", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[@type='checkbox' and @id='chk2linux']").click()
    await page.waitForTimeout(2000)
})

test("Relative XPATH using tagName with multiple attribute name nad partial value ", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[starts-with(@id,'rad1')]").click()
    await page.waitForTimeout(2000)
})

// find out number of links in the application
test("Relative XPATH using tagName with attribute name", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const olinks=await page.$$("xpath=//a[@href]")
    console.log("Number of Links :"+olinks.length)
    await page.waitForTimeout(2000)
})

// display All Link Names
test("Relative XPATH using tagName with attribute name display all link name", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const olinks=await page.$$("xpath=//a[@href]")
    for(let i=0;i<olinks.length;i++){
        let linkname=await olinks[i].textContent()
        console.log("Link Name :"+linkname)
    }
    await page.waitForTimeout(2000)
})

// based on partial matching link name clcik on a particular link
test("Relative XPATH using tagName with attribute name by specific link", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const olinks=await page.$$("xpath=//a[@href]")
    for(let i=0;i<olinks.length;i++){
        const linkname=await olinks[i].textContent()
        if(linkname.includes("Software")){
            olinks[i].click()
        }
    }
    await page.waitForTimeout(2000)
})

test("Relative XPATH using tagName with text content", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
   // await page.locator("xpath=//a[text()='S G Software Testing']").click()
   await page.locator("xpath=//a[normalize-space()='S G Software Testing']").click()
    await page.waitForTimeout(2000)
})

test("Relative XPATH using tagName with partial text content", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//a[contains(text(),'Software')]").click()
    await page.waitForTimeout(2000)
})

test.only("Relative XPATH using tagName with valid xpath with index", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=(//input[@id='firstname'])[3]").fill("Demouser3")
    await page.waitForTimeout(2000)
})