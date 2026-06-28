
class HomePage{
    constructor(page){
        this.page=page
        this.btnlogout=page.locator("//button[text()='Logout']")
    }

    async clickLogoutButton(){
        await this.btnlogout.click()
    }
}

module.exports={HomePage}