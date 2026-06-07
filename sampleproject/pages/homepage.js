class HomePage{
    constructor(page){
        this.page=page
        this.btnlogout=page.locator("//button[text()='Logout']")
    }

    async clickLogout(){
        await this.btnlogout.click()
    }
}

module.exports={HomePage}