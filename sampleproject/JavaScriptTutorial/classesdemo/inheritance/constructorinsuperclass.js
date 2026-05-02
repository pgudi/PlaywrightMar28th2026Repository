class Employee{
    constructor(eid,ename,job){
        this.eid=eid
        this.ename=ename
        this.job=job
    }
    showEmployeeDetails(){
        console.log(this.eid, this.ename, this.job);
    }
}
class Department extends Employee{
    constructor(deptname,eid,ename,job){
        super(eid,ename,job)
        this.deptname=deptname
    }

    displayDepartmentName(){
        console.log("Department Name :"+this.deptname);
    }
}

let obj=new Department("Research",101,"Santosh","Senior Manager")
obj.showEmployeeDetails()
obj.displayDepartmentName()