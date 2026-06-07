const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber")
const {request, expect} = require("@playwright/test")
let authToken = "";
let response;
let apiRequest;
setDefaultTimeout(5000)
Given('I execute authenticate POST HTTP method', async () => {
    apiRequest=await request.newContext()
     response = await apiRequest.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate",
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
});

Given('I capture the authentication token', async () => {
    authToken = (await response.text()).toString()
    console.log("Auth Token :" + authToken);
    await expect(response.status()).toBe(200)
});

When('I execute display customer GET HTTP method', async () => {
    response = await apiRequest.get("https://sgtestinginstitute.onrender.com/api/v1/customers/806",
        {
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + authToken
            }
        })
});

When('I capture response body of specific customer', async () => {
    const customerresponse = await response.json()
    let custId = await customerresponse.customerId;
    console.log("Customer Id :" + custId)
    const responseContent = (await response.text()).toString()
    console.log("Response Body :" + responseContent);
    await expect(response.status()).toStrictEqual(200)
});

Then('I validate 200 status code for display customer', async () =>{
    await expect(response.status()).toStrictEqual(200)
});

