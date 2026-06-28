// Named Function
function display(deptno, dname, location) {
    console.log("Department Number:" + deptno);
    console.log("Department Name:" + dname);
    console.log("Department Location:" + location);
}
display(10, "Accounting", "Dallas");
console.log("--------------------------");
// Anonymous Function
var showDetails = function (deptno, dname, location) {
    console.log("Department Number:" + deptno);
    console.log("Department Name:" + dname);
    console.log("Department Location:" + location);
};
showDetails(20, "Sales", "California");
console.log("--------------------------");
// Arrow Function
var deptDetails = function (deptno, dname, location) {
    console.log("Department Number:" + deptno);
    console.log("Department Name:" + dname);
    console.log("Department Location:" + location);
};
deptDetails(30, "Research", "New York");
