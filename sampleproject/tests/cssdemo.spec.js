const {test, expect} = require("@playwright/test")

test("Absolute CSS",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=html body div form input").first().fill("DemoUser1")
    await page.waitForTimeout(2000)
})

// Case 1: identify the Element based on tagName
test("Relative CSS using tagName",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input").first().fill("DemoUser2")
    await page.waitForTimeout(2000)
})

// case 2: Identify the Element based on tagName with id attribute
test("Relative CSS using tagName with id attribute value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input#pwd1pass1word1").fill("Welcome123")
    await page.waitForTimeout(2000)
})

// Case 3: Identify the Element based on  id attribute value alone
test("Relative CSS using id attribute value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=#pwd1pass1word1").fill("Welcome456")
    await page.waitForTimeout(2000)
})

// case 4: Identify the Element based on tagName with class attribute
test("Relative CSS using tagName and class attribute value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input.pass1word1").fill("Welcome789")
    await page.waitForTimeout(2000)
})

// case 5: Identify the Element based on  class attribute value
test("Relative CSS using class attribute value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=.pass1word1").fill("Welcome098")
    await page.waitForTimeout(2000)
})

// case 6: Identify the Element using tagName with attribute Name and Value combination
test("Relative CSS using tagName with attributeName and value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input[id='chk2linux']").click()
    await page.waitForTimeout(2000)
})

// case 7: Identify the Element using tagName with multiple attribute Name and Value combination
test("Relative CSS using tagName with multiple attributeName and value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input[id='chk2linux'][type='checkbox']").click()
    await page.waitForTimeout(2000)
})

// case 8: Identify the Element using tagName with attribute Name and  partial attribute Value combination
test("Relative CSS using tagName with attributeName and partial attribute value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input[id ^= 'rad2']").click()
    await page.waitForTimeout(2000)
})


// Case 9: Identify the Element based on  tagName with attribute name
// find out number of links in application
test("Relative CSS using tagName with attributeName",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const olinks=await page.$$("css=a[href]")
    console.log("Number of Links in Application :"+olinks.length);
    await page.waitForTimeout(2000)
})

//display all link names
test("Relative CSS using tagName with attributeName, display all link names",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const olinks=await page.$$("css=a[href]")
    for(let i=0;i<olinks.length;i++){
        const linkname=await olinks[i].textContent()
        console.log("Link Name :"+linkname);
    }
    await page.waitForTimeout(2000)
})

//In Multiple links click on a specific link
test("Relative CSS using tagName with attributeName, click on specific link",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const olinks=await page.$$("css=a[href]")
    for(let i=0;i<olinks.length;i++){
        const linkname=await olinks[i].textContent()
        if(linkname.includes("software")){
            await olinks[i].click()
        }
    }
    await page.waitForTimeout(2000)
})

// Case 10: Identify the Element based on nth child approach
test("Relative CSS using nth-child concept",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=form#frm3> :nth-child(3)").fill("Demotestdata03")
    await page.waitForTimeout(2000)
})
