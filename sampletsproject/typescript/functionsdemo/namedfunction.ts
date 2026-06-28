// Named Function
function display(deptno:number,dname:string, location:string):void{
    console.log("Department Number:"+deptno);
    console.log("Department Name:"+dname);
    console.log("Department Location:"+location);
}

display(10,"Accounting","Dallas")
console.log("--------------------------");

// Anonymous Function
let showDetails= function(deptno:number,dname:string, location:string):void{
    console.log("Department Number:"+deptno);
    console.log("Department Name:"+dname);
    console.log("Department Location:"+location);
}
showDetails(20,"Sales","California")
console.log("--------------------------");
// Arrow Function
let deptDetails=(deptno:number,dname:string, location:string):void =>{
    console.log("Department Number:"+deptno);
    console.log("Department Name:"+dname);
    console.log("Department Location:"+location);
}
deptDetails(30,"Research", "New York")