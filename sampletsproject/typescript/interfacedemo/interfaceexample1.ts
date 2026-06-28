interface Department{
    deptno:number;
    dname:string;
    loc:string;
    displayDeptDetails:()=>void;
}

let dept:Department={
    deptno:10,
    dname:"Accounting",
    loc:"Dallas",
    displayDeptDetails():void{
        console.log("Department Number:"+this.deptno);
        console.log("Department Name:"+this.dname);
        console.log("Department Location:"+this.loc);
    }
}

console.log(dept.deptno);
console.log(dept.dname);
console.log(dept.loc);
dept.displayDeptDetails()