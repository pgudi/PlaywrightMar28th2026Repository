class CustomerPage{
    constructor(page){
        this.page=page
        this.menuCustomer=page.locator("//a[text()='Customers']")
        this.btnAddCustomer=page.locator("//a[text()='Add Customer']")
        this.txtCustomerName=page.locator("(//input[@type='text'])[1]")
        this.txtCustomerEmailId=page.locator("(//input[@type='email'])[1]")
        this.txtCustomerLocation=page.locator("(//input[@type='text'])[2]")
        this.txtCustomerDescription=page.locator("(//input[@type='text'])[3]")
        this.btnCustomerSave=page.locator("//button[@type='submit']")

    }

    async clickCustomerMenuLink(){
        await this.menuCustomer.click()
    }

    async clickAddCustomerLink(){
        await this.btnAddCustomer.click()
    }

    async setCustomerName(customername){
        await this.txtCustomerName.fill(customername)
    }

    async setCustomerEmailId(emailid){
        await this.txtCustomerEmailId.fill(emailid)
    }

    async setCustomerLocation(location){
        await this.txtCustomerLocation.fill(location)
    }

    async setCustomerDescription(description){
        await this.txtCustomerDescription.fill(description)
    }

    async clickCustomerSaveButton(){
        await this.btnCustomerSave.click()
    }
}

module.exports={CustomerPage}