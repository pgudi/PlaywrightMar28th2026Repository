
//Destructuring at String Level
let str="WELCOME"

let [x,y,z] = str
console.log(x,y,z);

// Destructirng at string level only first and last eleemnt
let [a,,,,,,b]=str
console.log(a,b);


// Destructirng at string level uisng alternate approach
let [p,,q,,r,,s]=str
console.log(p,q,r,s);
