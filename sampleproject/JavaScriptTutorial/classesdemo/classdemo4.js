class Person{
    constructor(id, fname, age, location){
        this.id=id
        this.fname=fname
        this.age=age
        this.location=location
    }
}


let obj=new Person(101,"Srinivasa",25,"Bangalore")
console.log(obj.id, obj.fname,obj.age,obj.location);


let obj2=new Person(102,"Santosh",23,"Managalore")
console.log(obj2.id, obj2.fname,obj2.age,obj2.location);