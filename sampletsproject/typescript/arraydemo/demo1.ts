//declare 2D array

let a: number[][] = [];
//Assign Elements
a[0] = [10, 20, 30]
a[1] = [40, 50, 60]

//Read Elements
for (let i: number = 0; i < a.length; i++) {
    for (let j: number = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}
