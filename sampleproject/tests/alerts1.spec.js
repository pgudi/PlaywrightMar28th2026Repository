const {test, expect} = require("@playwright/test")

test("Handle Simple Alerts", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)

    page.on("dialog", async(alertWindow)=>{
        await expect(alertWindow.type()).toContain("alert")
        const message=await alertWindow.message()
        console.log("Alert Message :"+message)
        await expect(message).toContain("I am a JS Alert")
        await alertWindow.accept()
    })

    await page.locator("//button[text()='Click for JS Alert']").click()
})

test("Handle Confirm Alerts", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)

    page.on("dialog", async(alertWindow)=>{
        await expect(alertWindow.type()).toContain("confirm")
        const message=await alertWindow.message()
        console.log("Alert Message :"+message)
        await expect(message).toContain("I am a JS Confirm")
        await alertWindow.accept()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()

    const textContentMessage=await page.locator("//p[text()='You clicked: Ok']").textContent()
    console.log("Alert ACtion :"+textContentMessage);
    
    await expect(textContentMessage).toContain("You clicked: Ok")
})

test.only("Handle Prompt Alerts", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)

    page.on("dialog", async(alertWindow)=>{
        await expect(alertWindow.type()).toContain("prompt")
        const message=await alertWindow.message()
        console.log("Alert Message :"+message)
        await expect(message).toContain("I am a JS prompt")
        await alertWindow.accept("WELCOME PLAYWRIGHT")
    })
    
    await page.locator("//button[text()='Click for JS Prompt']").click()
    await page.waitForTimeout(3000)
    const promptContent=await page.locator("//p[@id='result']").textContent()
    console.log("Promt Message :"+promptContent);
    await expect(promptContent).toContain("You entered: WELCOME PLAYWRIGHT")
})