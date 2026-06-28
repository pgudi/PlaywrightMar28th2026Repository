import {Page, Locator} from '@playwright/test'

export class HomePage{
    page!:Page
    lnkLogout!:Locator

    constructor(page:Page){
        this.page=page
        this.lnkLogout=page.locator("//button[text()='Logout']")
    }

    async clickLogoutButton(){
        await this.lnkLogout.click()
    }
}