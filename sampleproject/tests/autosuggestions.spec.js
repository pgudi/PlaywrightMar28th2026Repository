const {test, expect} = require("@playwright/test")

test("Handing Auto Suggestions", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)
    await page.locator("css=#twotabsearchtextbox").fill("smart phone")
    await page.waitForTimeout(3000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
})

test.only("Select Items from Country Drop down without Keyboard", async ({ page }) => {
    await page.goto("https://www.google.com/")
    await page.waitForTimeout(3000)

    await page.locator("#APjFqb").fill("smart phone")
    await page.waitForTimeout(3000)
    const containerItems=await page.$$("//div[@role='presentation']")
    console.log("Numer of Items :"+containerItems.length);
    await page.waitForTimeout(1000)
    for(let i=0;i<containerItems.length;i++){
        const item=await containerItems[i].textContent()
        if(item.includes("smart phone under 7000")){
            await containerItems[i].click()
            break
        }
    }
    await page.waitForTimeout(3000)
})