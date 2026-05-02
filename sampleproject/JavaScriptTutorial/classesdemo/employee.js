class Employee{
    constructor(eid,ename,job,sal){
        this.eid=eid
        this.ename=ename
        this.job=job
        this.sal=sal
    }

    showEmployeeId(){
        console.log("Employee Id :"+this.eid);
    }

    showEmployeeName(){
        console.log("Employee Name :"+this.ename);
    }

    showEmployeeJob(){
        console.log("Employee Job Name :"+this.job);
    }

    showEmployeeSalary(){
        console.log("Employee Salary :"+this.sal);
    }
}

module.exports={Employee}