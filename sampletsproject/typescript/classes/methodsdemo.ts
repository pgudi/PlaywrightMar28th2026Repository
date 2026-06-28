class BasicMaths{

    addition(x:number,y:number):void{
        console.log("Addition Result :"+(x+y));
    }

    substraction(x:number,y:number):number{
        return (x -y)
    }

    multiplication(a:number,b:number,c:number):void{
        let result:number= (a * b * c)
        console.log("Multilication Result :"+result);
    }
}

let obj1=new BasicMaths()
obj1.addition(25,35)
let v1=obj1.substraction(45,30)
console.log(v1);
obj1.multiplication(4,5,6)
