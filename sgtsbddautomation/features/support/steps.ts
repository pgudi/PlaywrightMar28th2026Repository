import {When, Then} from '@cucumber/cucumber'
import {chromium, expect} from '@playwright/test'

console.log("Steps File Laoded !!!");

When('I launch chromium browser', async function () {
    const browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    this.page=await context.newPage()
    
    
});

When('I navigate Application url', async function () {
    await this.page.goto("https://sgtestinginstituteapp.onrender.com/")
    await this.page.waitForTimeout(3000)
});

Then('I find the login page', async function () {
   await expect(this.page).toHaveTitle("S G Software Testing Institute")
});

When('I enter username in username text field', async function () {
  await this.page.locator("//input[@name='username']").fill("pgudi")
});

When('I enter password in password text field', async function () {
  await this.page.locator("//input[@name='password']").fill("pgudi")
});

When('I clcik signin button', async function () {
  await this.page.locator("//button[text()='Sign In']").click()
});

Then('I find home page', async function () {
  await expect(this.page).toHaveTitle("S G Software Testing Institute")
});