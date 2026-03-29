const {test, expect} = require('@playwright/test')

test.skip("First Assertion on Numbers", ()=>{
    expect(100).toBe(100)
})

test("Second Assetion on Decimals", ()=>{
    expect(10.175).toBe(10.175)
})

test.skip("Third Assertion on Boolean value", ()=>{
//    expect(true).toBeTruthy()
    expect(false).toBe(false)
})

test("Fourth Assertion on Comparision1", ()=>{
    expect(15).toBeGreaterThanOrEqual(10)
})

test("Fifth Assertion on Comparision2", ()=>{
    expect(45).toBeLessThanOrEqual(55)
})

test("Sixth Assertion on String data", ()=>{
    expect("S G Software Testing").toContain("Software123")
})

test("Seventh Assertion on String Data", ()=>{
    expect("S G Software Testing".includes("Software")).toBeTruthy()
})