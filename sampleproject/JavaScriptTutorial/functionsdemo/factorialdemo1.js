// Write a function to find factorial of a given number?

function findFact(num){
    let fact=1
    for(let i=num;i>=1;i--){
        fact = fact * i
    }
    console.log("Factorial of "+num+" is "+fact);
    
}

findFact(4)
findFact(5)
findFact(6)

//Write a function to find sum of first 10 numbers?
function findSumOfNumbers(){
    let sum=0
    for(let i=1;i<=10;i++){
        sum=sum+i
    }
    console.log("Sum of First 10 Numbers :"+sum);
    
}
findSumOfNumbers()

