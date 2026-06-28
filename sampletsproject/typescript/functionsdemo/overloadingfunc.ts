function show(x:number, y:number):void;
function show(x:string,y:string):void;

function show(x:any, y:any):void{
    let result:number=(x + y)
    console.log("Result :"+result);
}

show(25,75)

function show(x:any, y:any):void{
    let result:string=(x + y)
    console.log("Result:"+result); 
}

show("Bangalore", "Karnataka")