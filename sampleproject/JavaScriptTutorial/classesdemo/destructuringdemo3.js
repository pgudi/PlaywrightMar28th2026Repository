//destructuring at object level

let student={
    "id":101,
    "fname":"Santosh",
    "course":"Research",
    "city":"California",
    "country":"United States"
}
// destructing at first and second value
const {id,fname}=student
console.log(id,fname);

//destructing selected value
const {course,city,country}=student
console.log(course,city,country);

const {m,n} =student
console.log(m,n);


