import { test, expect } from '@playwright/test'
let token:any;
let custId:any;
test.describe.serial("Create Customer Scenario", async () => {
    test("Authnticate User Details to Generate Token", async ({ request }) => {
        const response = await request.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate",
            {
                data: {
                    "username": "pgudi",
                    "password": "pgudi"
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        const responseContent = (await response.text()).toString()
        token=responseContent
        console.log("Response Content:" + token);
        expect(response.status()).toBe(200)
    })

    test("Create Customer using POST Method", async({request})=>{
        console.log("This Test can Create a Customer using POST HTTP Method");
        const response = await request.post("https://sgtestinginstitute.onrender.com/api/v1/customers",
            {
                data: {
                    "customerName": "auto_ts_demo1",
                    "emailId": "tsdemo1@sg.com",
                    "location": "Bangalore",
                    "customerDescription": "Testing Purpose"
                },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+token
                }
            }
        )
        const responseContent:any=await response.json()
        custId=await responseContent.customerId
        const customerResponse=(await response.text()).toString()
        console.log("Customer Response :"+customerResponse);
        expect(response.status()).toBe(201)
    })

    test("display Newly Customer using GET Method", async({request})=>{
        console.log("This Test can display Newly created Customer using GET HTTP Method");
        
        const response = await request.get("https://sgtestinginstitute.onrender.com/api/v1/customers/"+custId,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+token
                }
            }
        )
        const customerResponse=(await response.text()).toString()
        console.log("Customer Response :"+customerResponse);
        expect(response.status()).toBe(200)
    })

    test("Delete Newly Customer using DELETE Method", async({request})=>{
        console.log("This Test can Delete Newly created Customer using DELETE HTTP Method");
        
        const response = await request.delete("https://sgtestinginstitute.onrender.com/api/v1/customers/"+custId,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+token
                }
            }
        )
        const customerResponse=(await response.text()).toString()
        console.log("Customer Response :"+customerResponse);
        expect(response.status()).toBe(200)
    })
})
