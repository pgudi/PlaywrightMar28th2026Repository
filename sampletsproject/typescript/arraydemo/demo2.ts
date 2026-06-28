//declare 2D array

let b: number[][] = [[100, 200, 300], [400, 500, 600], [700, 800, 900]]

//Read Elements
let str: string = ""
for (let i: number = 0; i < b.length; i++) {
    for (let j: number = 0; j < b[i].length; j++) {
        str = str + b[i][j] + " "
    }
    str = str + "\n"
}

console.log(str);
console.log("---------------------------------------");
//Reverse Order
let tr1: string = ""
for (let i: number = b.length - 1; i >= 0; i--) {
    for (let j: number = b[i].length - 1; j >= 0; j--) {
        tr1 = tr1 + b[i][j] + " "
    }
    tr1 = tr1 + "\n"
}
console.log(tr1);


