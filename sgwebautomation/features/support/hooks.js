const { Before, After, setDefaultTimeout, AfterStep, Status } = require('@cucumber/cucumber')
const { chromium } = require("@playwright/test")
const { LoginPage } = require('./../../pages/loginpage')
const { HomePage } = require('./../../pages/homepage')
const { CustomerPage } = require('./../../pages/customerpage')

setDefaultTimeout(60000)
let browser, context, page
Before(async function () {
    browser = await chromium.launch({
        headless: false
    })
    context = await browser.newContext()
    this.page = await context.newPage()
    this.loginpage = new LoginPage(this.page)
    this.homepage = new HomePage(this.page)
    this.customerpage = new CustomerPage(this.page)
})

After(async function(){
    await this.page.close()
})

AfterStep(async function({result}){
    if (result.status == Status.PASSED){
        const screenshot=await this.page.screenshot({ fullPage: true })
        this.attach(screenshot , 'image/png')
    }
})