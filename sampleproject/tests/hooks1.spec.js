const {test, expect} = require("@playwright/test")

test.beforeEach(async()=>{
    console.log("Login into the Application Successfully");
    
})

test.afterEach(async()=>{
    console.log("Logout from the Application Successfully");
})

test("First Testcase", async () =>{
    console.log("It is a First PLaywright Testcase");
})

test("Second Testcase", async () =>{
    console.log("It is a Second PLaywright Testcase");
})

test("Third Testcase", async () =>{
    console.log("It is a Third PLaywright Testcase");
})

test("Fourth Testcase", async () =>{
    console.log("It is a Fourth PLaywright Testcase");
})