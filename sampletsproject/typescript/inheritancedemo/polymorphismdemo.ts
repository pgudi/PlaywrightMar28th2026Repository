class Employee{
    work(){
        console.log("The Employee is Working!!!");
    }
}

class Tester extends Employee{
    work(){
        console.log("The Tester is Testing the Application Functionality!!!");
    }
}

class Developer extends Tester{
    work(){
        console.log("The Developer is writing the Application Code!!!");
    }
}

let obj:Employee;

obj=new Tester()
obj.work()

obj=new Developer()
obj.work()