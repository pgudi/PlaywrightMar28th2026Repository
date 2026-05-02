function student(id,sname){
    this.id=id
    this.sname=sname
}

student.prototype.location="Tumkur"

let o1=new student(10,"Adams")
console.log(o1.id, o1.sname,o1.location);


let o2=new student(11,"Jones")
console.log(o2.id, o2.sname,o2.location);

let o3=new student(12,"Ford")
console.log(o3.id, o3.sname,o3.location);