class Maths1{
    addition(x,y){
        console.log("Addition Result :"+(x + y));
    }
}

class Maths2 extends Maths1{
    substraction(a,b){
        console.log("Substraction Result :"+(a - b));
    }
}

class Maths3 extends Maths2{
    division(x,y){
        console.log("Division Result :"+(x / y));
    }
}

class Maths4 extends Maths1{
    multiplication(x,y){
        console.log("Multiplication Result :"+(x * y));
    }
}

let obj1=new Maths4()
obj1.multiplication(12,15)
obj1.addition(40,50)

let obj2=new Maths3()
obj2.division(25,5)
obj2.substraction(45,20)
obj2.addition(20,70)