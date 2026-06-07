class HomePage{
    constructor(page){
        this.page=page
        this.btnlogout="//button[text()='Logout']"
    }

    async clickLogoutButton(){
        await this.page.click(this.btnlogout)
    }
}

module.exports={HomePage}