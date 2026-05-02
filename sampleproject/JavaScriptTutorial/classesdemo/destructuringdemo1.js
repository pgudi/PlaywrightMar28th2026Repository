//Destructuring in JavaScript Array
let fruits=["Mango","Apple","Orange","Grapes","Banana"]
let [x,y]=fruits
console.log(x,y)

//Destructuring in JavaScript Array only first and last eleemnt

let [a,,,,b]=fruits
console.log(a,b);
//Destructuring in JavaScript Array , every alternate element

let [p,,q,,r]=fruits
console.log(p,q,r);