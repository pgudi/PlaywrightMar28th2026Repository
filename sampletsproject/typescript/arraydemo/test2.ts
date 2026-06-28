export { }

//declare array
let arr: number[] = [];

//Assign Elements
arr[0] = 10
arr[1] = 20
arr[2] = 30
arr[3] = 40

//Read Elements
for (let i: number = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("---------------------------------");

//for each loop
for (let x in arr) {
    console.log(arr[x]);
}
console.log("---------------------------------");
// for of loop
for (let x of arr) {
    console.log(x);
}

