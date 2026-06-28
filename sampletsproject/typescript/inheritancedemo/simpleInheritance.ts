// Simple Inheritance
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

let o1=new Maths2()
o1.addition(30,40)
o1.substraction(55,35)