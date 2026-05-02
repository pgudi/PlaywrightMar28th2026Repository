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

class Maths3 extends Maths1{
    division(x,y){
        console.log("Division Result :"+(x / y));
    }
}

let obj1=new Maths2()
obj1.substraction(50,30)
obj1.addition(100,20)

let obj2=new Maths3()
obj2.division(35,7)
obj2.addition(40,60)