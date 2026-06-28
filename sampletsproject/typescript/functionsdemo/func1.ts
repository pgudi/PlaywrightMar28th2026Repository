// write a function it should display factorial of a given numebr

function showFactorial(num: number): void {
    let fact: number = 1
    for (let i: number = num; i >= 1; i--) {
        fact = fact * i
    }
    console.log("Factorial of " + num + " is " + fact);

}
showFactorial(4)
showFactorial(5)
showFactorial(6)