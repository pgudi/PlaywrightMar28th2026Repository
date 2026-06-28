const { Before, After } = require("@cucumber/cucumber")
const { chromium } = require("@playwright/test")
let page
Before(async function() {
    const browser = await chromium.launch(
        {
            headless: false
        })
    const context = await browser.newContext()
    this.page = await context.newPage()
})

After(async function() {
    await this.page.close()
})