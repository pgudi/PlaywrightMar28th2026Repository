// function which do not return value
// for teh given integer array reverse the Elements

function readElements(x){
    for(let i=x.length-1;i>=0;i--){
        console.log(x[i]);
    }
}
let x=[10,20,30,40,50]
readElements(x)
console.log("-----------------------------");
// function which return value
// for teh given integer array reverse the Elements
function getElements(y){
    let arr=[]
    let k=0
    for(let i=y.length-1;i>=0;i--){
        arr[k]=y[i]
        k++
    }
    return arr;
}
let y=[100,200,300,400,500,600]
let test=getElements(y)
for(let v1 of test){
    console.log(v1);
}
console.log("-----------------------------");
for(let i=test.length-1;i>=0;i--){
    console.log(test[i]);
}
console.log("-----------------------------");
let sum=0
for(let j=0;j<test.length;j++){
    sum=sum+test[j]
}
console.log("sum of All Elements :"+sum);
