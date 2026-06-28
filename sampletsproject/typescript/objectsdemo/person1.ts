export { }
let person: { firstname: string, age: number, cityname: string }[] = [
    {
        "firstname": "Santosh",
        "age": 22,
        "cityname": "Mysore"
    },

    {
        "firstname": "Adams",
        "age": 44,
        "cityname": "California"
    },
    {
        "firstname": "Jhonson",
        "age": 37,
        "cityname": "Dallas"
    }

]

//Read values
console.log(person[0].firstname);
console.log(person[0].age);
console.log(person[0].cityname);
console.log(person[1].firstname);
console.log(person[1].age);
console.log(person[1].cityname);
console.log(person[2].firstname);
console.log(person[2].age);
console.log(person[2].cityname);