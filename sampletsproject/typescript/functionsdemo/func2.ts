//prime number validation

function isPrimeNumber(num: number): boolean {

    let flag: number = 0;
    for (let i: number = 2; i < num; i++) {
        if (num % i == 0) {
            flag++
            break
        }
    }
    if (flag == 0) {
        return true
    } else {
        return false
    }
}

console.log(isPrimeNumber(7));
console.log(isPrimeNumber(17));
console.log(isPrimeNumber(27));
console.log(isPrimeNumber(37));
console.log(isPrimeNumber(47));