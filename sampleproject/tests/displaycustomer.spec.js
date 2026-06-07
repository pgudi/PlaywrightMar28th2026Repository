const { test, expect } = require("@playwright/test");
let authToken = "";
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

    test("Display a specific Customer", async ({ request }) => {
        const response = await request.get("https://sgtestinginstitute.onrender.com/api/v1/customers/806", 
            {
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer "+authToken
            }
        })
        const customerresponse = await response.json()
        let custId = await customerresponse.customerId;
        console.log("Customer Id :" + custId)
        const responseContent = (await response.text()).toString()
        console.log("Response Body :" + responseContent);
        await expect(response.status()).toStrictEqual(200)
    })
})