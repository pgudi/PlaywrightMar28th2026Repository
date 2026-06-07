let num = [3,1,4,2,6,5,7]

let greaterthan5=function(num){
    return num>5
}

let result1=num.filter(greaterthan5)
console.log(result1);
console.log("-------------------------");

let evennums=function(num){
    return (num%2==0)
}

let result2=num.filter(evennums)
console.log(result2);
console.log("-------------------------");

let oddnums=function(num){
    return (num%2==1)
}

let result3=num.filter(oddnums)
console.log(result3);