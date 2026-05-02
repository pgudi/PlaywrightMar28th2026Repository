class Maths1{
    addition(x,y){
        console.log("Addition Result :"+(x + y));
    }
}

class Maths2 {
    substraction(a,b){
        console.log("Substraction Result :"+(a - b));
    }
}

class Maths3 extends Maths2 , Maths1{
    division(x,y){
        console.log("Division Result :"+(x / y));
    }
}

let obj=new Maths3()
obj.division(40,10)
obj.substraction(25,10)
obj.addition(50,30)