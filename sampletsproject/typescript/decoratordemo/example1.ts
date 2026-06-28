function logger(constructor:Function){
    console.log("Applying the Logging Before Execution of Class:"+constructor.name);
}

@logger
class Customer{
    constructor(){
        console.log("It is a Customer Customer Class!!");
    }
}

let custObj=new Customer()