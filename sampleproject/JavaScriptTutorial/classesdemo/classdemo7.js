class ArraysDemo{
    readFirstHalhOfElements(arr){
        for(let i=0;i<arr.length/2;i++){
            console.log(arr[i]);
            
        }
    }

   static readSecondHalhOfElements(arr){
        for(let i=arr.length/2;i<arr.length;i++){
            console.log(arr[i]);
            
        }
    } 
}

let arr=[10,20,30,40,50,60]
ArraysDemo.readSecondHalhOfElements(arr)
console.log("-----------------");

let o=new ArraysDemo()
o.readFirstHalhOfElements(arr)
