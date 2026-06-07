let num = [3,1,4,2,6,5,7]

let sumofelements=function(num){
    let sum=0
    for(let i=0;i<num.length;i++){
        sum=sum+num[i]
    }
    return sum
}
console.log(sumofelements(num));

console.log("-------------------");
// apply reduce function to find sum of numbers
let sunofnumbers=num.reduce(function(acc,curr){
    return acc=acc+curr
},0)
console.log(sunofnumbers);
