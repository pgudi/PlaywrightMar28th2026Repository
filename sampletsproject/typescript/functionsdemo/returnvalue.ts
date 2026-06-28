// Named function
function getDetails(deptno:number,dname:string,loc:string):string{
    return deptno+" "+dname+" "+loc
}

let v1=getDetails(10,"Accounting","California")
console.log(v1);

// Anonymous Function
let getInfo=function(deptno:number,dname:string,loc:string):string{
    return deptno+" "+dname+" "+loc
}
let v2=getInfo(20,"Research","Dallas")
console.log(v2);

//Arrow Function
let getDeptDetails=(deptno:number,dname:string,loc:string):string =>{
    return deptno+" "+dname+" "+loc
}
let v3=getDeptDetails(30,"Sales","New York")
console.log(v3);