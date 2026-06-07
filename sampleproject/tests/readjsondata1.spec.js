const {test, expect} = require("@playwright/test")
// const data1 = JSON.parse(JSON.stringify(require("./../datafiles/testdata1.json")))
const data1 = require("./../datafiles/testdata1.json")
const data2 = require("./../datafiles/testdata2.json")
const nested = require("./../datafiles/nestedjson.json")

test("Read Content from JSON Object", async({page})=>{
    console.log(data1.eid)
    console.log(data1.ename)
    console.log(data1.jobname)
    console.log(data1.sal)
})

test("Read Content from JSON Array", async({page})=>{
    for (let data of data2 ){
        console.log(data);
    }
})

test("Read Content from JSON Array 2", async({page})=>{
    for (let data of data2 ){
        console.log(data.eid);
        console.log(data.ename);
        console.log(data.jobname);
        console.log(data.sal);
        console.log("--------------");
    }
})

test("Read content from Nested Json Object", async({page})=>{
    console.log(nested.santu.eid)
    console.log(nested.santu.ename)
    console.log(nested.santu.jobname)
    console.log(nested.santu.sal)
    console.log(nested.santu.address.city)
    console.log(nested.santu.address.state)
    console.log("-----------------")
    console.log(nested.vinu.eid)
    console.log(nested.vinu.ename)
    console.log(nested.vinu.jobname)
    console.log(nested.vinu.sal)
    console.log(nested.vinu.address.city)
    console.log(nested.vinu.address.state)
})