// Hierarchical Inheritance
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

class Maths3 extends Maths1{
    division(a:number, b:number):void{
        let result:number=(a / b)
        console.log("Substraction Result :"+result);
    }
}

let o1=new Maths3()
o1.addition(50,40)
o1.division(25,5)

let o2=new Maths2()
o2.addition(100,50)
o2.substraction(100, 70)