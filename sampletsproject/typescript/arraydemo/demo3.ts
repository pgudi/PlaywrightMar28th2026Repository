export { }
//perfrom addition of two matrix
let x: number[][] = [[1, 2, 3], [4, 5, 6]]
let y: number[][] = [[10, 20, 30], [40, 50, 60]]
let z: number[][] = [[], []]
// perform addition and store teh result in another array
for (let i: number = 0; i < x.length; i++) {
    for (let j: number = 0; j < x[i].length; j++) {
        z[i][j] = x[i][j] + y[i][j]
    }
}

//Read Elements in Reverse Order
let str: string = ""
for (let k: number = z.length - 1; k >= 0; k--) {
    for (let l: number = z[k].length - 1; l >= 0; l--) {
        str = str + z[k][l] + " "
    }
    str = str + "\n"
}
console.log(str);
