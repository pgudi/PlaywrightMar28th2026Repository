const {test, expect} = require("@playwright/test")
test.beforeAll(async()=>{
    console.log("Login into the Application Successfully"); 
})

test.afterAll(async()=>{
    console.log("Logout from the Application Successfully");
})
test.describe("Santiy Testcases", async()=>{
    test("Sanity First Testcase", async()=>{
        console.log("It is a First Santiy Testcase");
    })
    test("Sanity Second Testcase", async()=>{
        console.log("It is a Second Santiy Testcase");
    })
})

test.describe("Regression Testcases", async()=>{
    test("Regression First Testcase", async()=>{
        console.log("It is a First Regression Testcase");
    })
    test("Regression Second Testcase", async()=>{
        console.log("It is a Second Regression Testcase");
    })
})

test.describe("Unit Testcases", async()=>{
    test("Unit First Testcase", async()=>{
        console.log("It is a First Unit Testcase");
    })
    test("Unit Second Testcase", async()=>{
        console.log("It is a Second Unit Testcase");
    })
})