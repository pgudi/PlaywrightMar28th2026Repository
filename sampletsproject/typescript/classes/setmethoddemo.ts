class Department{
    deptno!:number;
    dname!:string;
    loc!:string;

    setDeptDetails():void{
        this.deptno=10;
        this.dname="Accounting";
        this.loc="Dallas"
    }

    displayDeptDetails():void{
        console.log("Department Number:"+this.deptno);
        console.log("Department Name:"+this.dname);
        console.log("Department Location:"+this.loc);
    }
}

let dept1=new Department()
dept1.setDeptDetails()
dept1.displayDeptDetails()
