const {test, expect} = require("@playwright/test")

test.describe("Santiy Testcases", async()=>{
    test("Sanity First Testcase", async()=>{
        console.log("It is a First Santiy Testcase");
    })
    test("Sanity Second Testcase", async()=>{
        console.log("It is a Second Santiy Testcase");
    })
})

test.describe.skip("Regression Testcases", async()=>{
    test("Regression First Testcase", async()=>{
        console.log("It is a First Regression Testcase");
    })
    test("Regression Second Testcase", async()=>{
        console.log("It is a Second Regression Testcase");
    })
})

test.describe.skip("Unit Testcases", async()=>{
    test("Unit First Testcase", async()=>{
        console.log("It is a First Unit Testcase");
    })
    test("Unit Second Testcase", async()=>{
        console.log("It is a Second Unit Testcase");
    })
})