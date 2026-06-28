//declare tuple
let tup1: [number, number, string, boolean] = [10, 20, "Dallas", true]

for (let i: number = 0; i < tup1.length; i++) {
    console.log(tup1[i]);

}
console.log("---------------------------");

//Reverse order

for (let j: number = tup1.length - 1; j >= 0; j--) {
    console.log(tup1[j]);
}
