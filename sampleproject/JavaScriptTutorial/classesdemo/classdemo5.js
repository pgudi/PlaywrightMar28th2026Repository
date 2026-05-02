class Person{
      constructor(id, fname, age, location){
        this.id=id
        this.fname=fname
        this.age=age
        this.location=location
    }

    showPersonId(){
        console.log("Person Id :"+this.id)
    }

    showPersonName(){
        console.log("Person Name :"+this.fname)
    }

    showPersonAge(){
        console.log("Person Age :"+this.age)
    }

    showPersonLocation(){
        console.log("Person Location :"+this.location)
    }
}
let o=new Person(101,"Santosh",22,"Bangalore")
o.showPersonId();
o.showPersonName();
o.showPersonAge();
o.showPersonLocation();