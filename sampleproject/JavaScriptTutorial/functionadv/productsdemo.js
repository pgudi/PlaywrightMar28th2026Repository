
let API_URL="https://fakestoreapi.com/products"

async function readRecords(){
    let response = await fetch(API_URL)
    let content=await response.json()
    console.log(content);
}

readRecords()