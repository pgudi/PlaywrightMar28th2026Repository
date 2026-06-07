const { test, expect } = require("@playwright/test");
let authToken = "";
let custId;
test.describe.serial("display Customer Scenario", async () => {
    test("Authenticate the sgsoftware api", async ({ request }) => {
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
        authToken = (await response.text()).toString()
        console.log("Auth Token :" + authToken);
        await expect(response.status()).toStrictEqual(200)
    })

    test("Create Customer Post API", async ({ request }) => {
        console.log("This testcase creates Customer using POST HTTP Method!!!");
        const response = await request.post("https://sgtestinginstitute.onrender.com/api/v1/customers",
            {
                data: {
                    "customerName": "auto_api_demo_01",
                    "emailId": "autoapi@sg.com",
                    "location": "New York",
                    "customerDescription": "Provides Services to Hard disk",
                },
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer " + authToken
                }
            }
        )
        const customerresponse = await response.json()
        custId = await customerresponse.customerId;
        console.log("Customer Id :" + custId)
        const responseContent = (await response.text()).toString()
        console.log("Response Body :" + responseContent);
        await expect(response.status()).toStrictEqual(201)
    })

    test("Display a specific Customer", async ({ request }) => {
        console.log("This testcase Displays a Specific Customer using GET HTTP Method!!!");
        const response = await request.get("https://sgtestinginstitute.onrender.com/api/v1/customers/"+custId,
            {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer " + authToken
                }
            })
        const responseContent = (await response.text()).toString()
        console.log("Response Body :" + responseContent);
        await expect(response.status()).toStrictEqual(200)
    })

    test("Delete a specific Customer", async ({ request }) => {
        console.log("This testcase Deletes a Specific Customer using DELETE HTTP Method!!!");
        const response = await request.delete("https://sgtestinginstitute.onrender.com/api/v1/customers/" + custId,
            {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer " + authToken
                }
            })
        const responseContent = (await response.text()).toString()
        console.log("Response Body :" + responseContent);
        await expect(response.status()).toStrictEqual(200)
    })
})