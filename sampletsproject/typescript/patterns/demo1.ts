/*
    * * * * * * *
    * * * * * * *
    * * * * * * *
    
    number of rows =3
    number of columns =7
*/
let patterns: string = ""
for (let i: number = 1; i <= 3; i++) {
    for (let j: number = 1; j <= 7; j++) {
        patterns = patterns + "* "
    }
    patterns = patterns + "\n"
}
console.log(patterns)