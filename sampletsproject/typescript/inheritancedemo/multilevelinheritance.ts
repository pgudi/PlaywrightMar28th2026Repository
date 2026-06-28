// Multilevel Inheritance
export {}

class Maths1{
    addition(x:number, y:number):void{
        let result:number=(x + y)
        console.log("Addition Result :"+result);
    }
}

class Maths2 extends Maths1{
    substraction(x:number, y:number):void{
        let result:number=(x - y)
        console.log("Substraction Result :"+result);
    }
}

class Maths3 extends Maths2{
    division(a:number, b:number):void{
        let result:number=(a / b)
        console.log("Substraction Result :"+result);
    }
}

let o=new Maths3()
o.addition(50,40)
o.substraction(70,60)
o.division(25,5)