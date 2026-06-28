export {}
class Employee{
    eid!:number;
    ename!:string
    job!:string
    constructor(eid:number, ename:string, job:string){
        this.eid=eid;
        this.ename=ename;
        this.job=job;
        console.log("Employee Id :"+this.eid);
        console.log("Employee Name :"+this.ename);
        console.log("Employee Job :"+this.job);
    }
}

class Department extends Employee{
    deptno!:number
    dname!:string
    constructor(deptno:number,dname:string,eid:number, ename:string, job:string){
        super(eid, ename, job)
        this.deptno=deptno
        this.dname=dname
        console.log("Department Number :"+this.deptno);
        console.log("Department Name :"+this.dname);
    }
}

let obj=new Department(10,"Research",1001,"Santosh","Manager")