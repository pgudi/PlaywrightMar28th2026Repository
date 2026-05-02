class Department{
    constructor(id,dname){
        this.id=id
        this.dname=dname
    }
}

Department.prototype.loc="California"

Department.prototype.showJobName=function(){
                                    console.log("Job Name: Analyst");
                                }

let o1=new Department(10,"Accounting")
console.log(o1.id, o1.dname,o1.loc);
o1.showJobName()

let o2=new Department(20,"Sales")
console.log(o2.id, o2.dname,o2.loc);
o2.showJobName()