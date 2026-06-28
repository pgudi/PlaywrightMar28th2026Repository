const {Given, When, Then} = require("@cucumber/cucumber")
const {expect, chromium} = require("@playwright/test")
const data=require("./../../datafiles/logindata.json")
const datainvalid=require("./../../datafiles/logininvalid.json")


When('I navigate application url', async function() {
  await this.page.goto("https://sgtestinginstituteapp.onrender.com/")
});

Then('I find the login page', async function() {
   await expect(this.page).toHaveTitle("S G Software Testing Institute")
   await expect(this.page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login")
});

Then("I close the application", async function(){
    this.context.close()
    this.browser.close()
})

When('I enter username in username text field', async function() {
   await this.page.locator("//input[@name='username']").fill(data.username)
});

When('I enter password in password text field', async function() {
  await this.page.locator("//input[@name='password']").fill(data.password)
});

When('I click on signin button', async function() {
  await this.page.locator("//button[text()='Sign In']").click()
});

Then('I find the home page', async function() {
  await expect(this.page).toHaveTitle("S G Software Testing Institute")
   await expect(this.page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
});

When('I click on Logout Link', async function() {
    await this.page.locator("//button[text()='Logout']").click()
});

When ('I enter invalid username in username text field', async function(){
    await this.page.locator("//input[@name='username']").fill(datainvalid.username)
});

When('I enter invalid password in password text field', async function() {
  await this.page.locator("//input[@name='password']").fill(datainvalid.password)
});

Then('I find message Invalid username or password', async function() {
    const errorMessage=await this.page.locator("//p[text()='Invalid username or password']").textContent()
    await expect(errorMessage==="Invalid username or password").toBeTruthy()
});

When('I click on Customer Menu', async function() {
  await this.page.locator("//a[text()='Customers']").click()
});

When('I click on Add Customer button', async function() {
  await this.page.locator("//a[text()='Add Customer']").click()
});

When('I enter customername in customer Name text field', async function() {
  await this.page.getByPlaceholder("Enter Customer Name").fill("auto_demo_cust1")
});

When('I enter emailid in emailID text field', async function() {
    await this.page.getByPlaceholder("Enter EmailId").fill("auto_cust01@sg.com")
});

When('I enter location in location text field', async function() {
  await this.page.getByPlaceholder("Enter Location").fill("Bangalore")
});

When('I enter description in description text field', async function() {
  await this.page.getByPlaceholder("Enter Description").fill("Testing Purpose")
});

When('I click on save button', async function() {
  await this.page.locator("//button[@type='submit']").click()
});

Then('I find newly created customername in List Customer Page',async function() {
  const objcustomer=await this.page.locator("//td[text()='auto_demo_cust1']")
  await expect(objcustomer).toBeVisible()
});

When('I delete the newly created customername from List Customer Page', async function() {
   await this.page.on("dialog", async function(dialog){
        const message=await dialog.message()
        console.log("Message :"+message);
        await dialog.accept()
        
    })
    await this.page.locator("//td[text()='auto_demo_cust1']/following-sibling::td[4]/button[2]").click()
    // this.page.waitForLoadState("networkidle")
    await this.page.waitForTimeout(3000)
  
});