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

class Maths4 extends Maths3{
    multiplication(a:number, b:number):void{
         let result:number=(a * b)
        console.log("Multiplication Result :"+result);
    }
}

let o1=new Maths4()
o1.addition(40,50)
o1.division(55,5)
o1.multiplication(14,10)

let o2=new Maths2()
o2.addition(90,60)
o2.substraction(80,45)