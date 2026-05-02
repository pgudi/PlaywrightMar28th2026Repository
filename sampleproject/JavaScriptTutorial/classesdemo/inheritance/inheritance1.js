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

let obj=new Maths3()
obj.division(25,5)
obj.substraction(45,20)
obj.addition(20,70)