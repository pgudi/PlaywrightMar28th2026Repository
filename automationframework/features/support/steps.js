const {Given, When, Then} = require("@cucumber/cucumber")
const {expect, chromium} = require("@playwright/test")
const data=require("./../../datafiles/logindata.json")
const datainvalid=require("./../../datafiles/logininvalid.json")
let context;
let browser;
Given('I launch chromium browser', async () =>{
    this.browser = await chromium.launch({
    headless:false
  })
  this.context=await this.browser.newContext()
  this.page=await this.context.newPage()
});

When('I navigate application url', async ()=> {
  await this.page.goto("https://sgtestinginstituteapp.onrender.com/")
});

Then('I find the login page', async ()=> {
   await expect(this.page).toHaveTitle("S G Software Testing Institute")
   await expect(this.page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login")
});

Then("I close the application", async()=>{
    this.context.close()
    this.browser.close()
})

When('I enter username in username text field', async ()=> {
   await this.page.locator("//input[@name='username']").fill(data.username)
});

When('I enter password in password text field', async ()=> {
  await this.page.locator("//input[@name='password']").fill(data.password)
});

When('I click on signin button', async ()=> {
  await this.page.locator("//button[text()='Sign In']").click()
});

Then('I find the home page', async ()=> {
  await expect(this.page).toHaveTitle("S G Software Testing Institute")
   await expect(this.page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
});

When('I click on Logout Link', async ()=> {
    await this.page.locator("//button[text()='Logout']").click()
});

When ('I enter invalid username in username text field', async()=>{
    await this.page.locator("//input[@name='username']").fill(datainvalid.username)
});

When('I enter invalid password in password text field', async ()=> {
  await this.page.locator("//input[@name='password']").fill(datainvalid.password)
});

Then('I find message Invalid username or password', async ()=> {
    const errorMessage=await this.page.locator("//p[text()='Invalid username or password']").textContent()
    await expect(errorMessage==="Invalid username or password").toBeTruthy()
});