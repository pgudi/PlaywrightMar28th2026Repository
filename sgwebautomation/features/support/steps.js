const { Given, When, Then } = require('@cucumber/cucumber')
const { chromium, expect } = require("@playwright/test")
const validdata = require('./../../datafiles/login_valid.json')
const invaliddata = require('./../../datafiles/login_invalid.json')

When('I navigate application url', async function () {
  await this.page.goto("https://sgtestinginstituteapp.onrender.com/")
});

Then('I find login page', async function () {
  await expect(this.page).toHaveTitle("S G Software Testing Institute")
});

When('I enter username in username text field', async function () {
  await this.loginpage.setUserName(validdata.username)
});

When('I enter password in password text field', async function () {
  await this.loginpage.setPassword(validdata.password)
});

When('I click on signin button', async function (){
  await this.loginpage.clickSignInButton()
});

Then('I find home page', async function () {
  await expect(this.page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
  await expect(this.page).toHaveTitle("S G Software Testing Institute")
});

When('I enter invalid username in username text field', async function () {
  await this.loginpage.setUserName(invaliddata.username)
});

When('I enter invalid password in password text field', async function () {
  await this.loginpage.setPassword(invaliddata.password)
});

Then('I find error message Invalid username or password', async function(){
  const errorLocator=await this.page.locator("//p[text()='Invalid username or password']")
  await expect(errorLocator).toHaveText("Invalid username or password")
})

When('I click on logout link', async function(){
  await this.homepage.clickLogoutButton()
})

When('I enter {string} in username text field', async function (username) {
  await this.loginpage.setUserName(username)
});

When('I enter {string} in password text field', async function (password) {
  await this.loginpage.setPassword(password)
});

Given('I click on customers menu', async function () {
  await this.customerpage.clickCustomerMenuLink()
});

Given('I click on add customer button', async function () {
  await this.customerpage.clickAddCustomerLink()
});

When('I enter {string} in customername text field', async function (customername) {
  await this.customerpage.setCustomerName(customername)
});

When('I enter {string} in emailid text field', async function (emailid) {
  await this.customerpage.setCustomerEmailId(emailid)
});

When('I enter {string} in location text field', async function (location) {
  await this.customerpage.setCustomerLocation(location)
});

When('I enter {string} in description text field', async function (description) {
  await this.customerpage.setCustomerDescription(description)
});

When('I click on save button in add customer page', async function () {
  await this.customerpage.clickCustomerSaveButton()
});

Then('I find newly created {string} in list customer page', async function (customername) {
  const customer=await this.page.locator("//td[contains(normalize-space(), '"+customername+"')]")
  await expect(customer).toBeVisible()
});

When('I delete newly created {string} from list customer page',  async function (customername) {
  await this.page.on('dialog', async function(dialog){
    const message=await dialog.message()
    console.log("Alert Message :"+message);
    await expect(message.includes('Do you want to Delete the Customer Record?')).toBeTruthy()
    await dialog.accept()
  })
  await this.page.locator("//td[contains(normalize-space(), '"+customername+"')]/following-sibling::td[4]/button[2]").click()
  // await this.page.waitForLoadState("networkidle")
  await this.page.waitForTimeout(3000)
});