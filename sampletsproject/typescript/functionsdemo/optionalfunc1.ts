/*
function showDetails(deptno:number,dname:string):void{
    console.log(deptno+"  "+dname);
    
}

showDetails(10,"Accounting")
showDetails(20)  //Expected 2 arguments, but got 1.ts(2554)
showDetails(30,"Sales","Dallas") // Expected 2 arguments, but got 3.ts(2554)
*/

//Optional Parameters
function showDetails1(deptno:number,dname?:string):void{
    console.log(deptno+"  "+dname);
    
}
showDetails1(10,"Accounting")
showDetails1(20)
//showDetails1(30,"Sales","Dallas") // Expected 1-2 arguments, but got 3.