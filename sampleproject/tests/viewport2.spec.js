const {test, expect} = require("@playwright/test")

test.use({viewport:{width:1536, height:864}})

test("Create Customer and Delete Customer", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    const width=await page.viewportSize().width
    console.log("Width of ViewPort :"+width);
    const height=await page.viewportSize().height
    console.log("Height of ViewPort :"+height);
    await page.locator("//input[@name='username']").fill("pgudi")
    await page.locator("//input[@name='password']").fill("pgudi")
    await page.locator("//button[text()='Sign In']").click()
    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Customers']").click()
    await page.locator("//a[text()='Add Customer']").click()
    await page.getByPlaceholder("Enter Customer Name").fill("auto_customer01")
    await page.getByPlaceholder("Enter EmailId").fill("auto_info@sg.com")
    await page.getByPlaceholder("Enter Location").fill("California")
    await page.locator("(//input[@type='text'])[3]").fill("Testing Purpose")
    await page.locator("//button[@type='submit']").click()
    await page.waitForTimeout(3000)
    //Delete Customer
    page.on("dialog", async(alertWindow)=>{
        const message=await alertWindow.message()
        console.log("Alert Message :"+message);
        await alertWindow.accept()        
    })
    await page.locator("//td[text()='auto_customer01']/following-sibling::td[4]/button[2]").click()
    await page.waitForTimeout(3000)
    await page.locator("//button[text()='Logout']").click()
    await page.waitForTimeout(3000)
})