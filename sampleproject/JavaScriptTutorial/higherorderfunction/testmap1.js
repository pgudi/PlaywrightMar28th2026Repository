let num = [3,1,4,2,6,5,7]

// approach 1:
let result1=num.map((x)=>{
    return (x * x)
})

console.log(result1);

console.log("------------------------");

//approach 2:

let square = function(a){
    return (a * a)
}

let result2=num.map(square)
console.log(result2);
console.log("------------------------");
//appraoch 3:
let result3=num.map(function(b){
    return (b * b)
})
console.log(result3);