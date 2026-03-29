const {test, expect} = require('@playwright/test')

test("First PLaywright Testcase", function display(){
    console.log("It is a First PLaywright Testcases based on Named Function!!!");
    
})

test("Second PLaywright Testcase", function(){
    console.log("It is a Second PLaywright Testcases based on Ananymous Function!!!");
})

test("Third PLaywright Testcase", ()=>{
    console.log("It is a Third PLaywright Testcases based on Arrow Function!!!");
})