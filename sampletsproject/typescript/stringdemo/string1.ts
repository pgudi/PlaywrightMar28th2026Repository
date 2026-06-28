let str1: string = "Programming"

//display all characters in uppercase
console.log(str1.toUpperCase());

//display all characters in lowercase
console.log(str1.toLowerCase());

// find number of characters in given string
console.log(str1.length);

// Extract character based on index
console.log(str1.charAt(0));

//Replace String
let str2: string = "It is a nice day"
console.log(str2.replace("is", "was"))

//existance of string  starts-with, ends with & contains
let str3: string = "Bangalore is capital city of karnataka"
console.log(str3.startsWith("Bangalore"));
console.log(str3.endsWith("karnataka"));
console.log(str3.includes("capital"));

//split string
let str4: string = "Apple,Mango, Banana, Orange"
let arr: string[] = str4.split(",")
console.log(arr);

//indexOf & lastindexOf
let str5: string = "it is a book, it is on the table"
console.log(str5.indexOf("is"));
console.log(str5.lastIndexOf("is"));
console.log("------------------------------");

// trim
let str6: string = "   Welcome   "
//before trim , length of string
console.log(str6.length);
//after trim , length of string
console.log(str6.trim().length);

// substring
let str7: string = "Programming"
console.log(str7.substring(3));
console.log(str7.substring(3, 7));
console.log("------------------------------");

// slice
let str8: string = "Programming"
console.log(str8.slice(3));
console.log(str8.slice(3, 7));
console.log("------------------------------");

