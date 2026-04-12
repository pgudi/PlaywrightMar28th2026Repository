/*

* * * * * * *
* * * * * * *
* * * * * * *

Number of Rows ?
Number of Columns?

Number of Rows  -> Outer Loop 
Number of Columns  -> Inner Loop

*/
let pattern=""
for(let i=1;i<=3;i++){
    for(let j=1;j<=7;j++){
        pattern=pattern+" * "
    }
    pattern=pattern+"\n"
}
console.log(pattern);
