function showDetails(deptno:number,...dname:string[]):void{
    console.log(deptno+"  "+dname.join("  "));
    
}
showDetails(10,"Accounting")
showDetails(10,"Accounting","Sales","Research","Operations")