let employee={
    "id":1001,
    "ename":"Santosh",
    "job":"Manager",
    "sal":20000,
    "incentive":function(){
                    return (this.sal * 10)/100
                },
    "totalsal": function(){
                    return (this.sal + this.incentive())
                }
            
}

console.log(employee.id);
console.log(employee.ename);
console.log(employee.job);
console.log(employee.sal);
console.log(employee.incentive());
console.log(employee.totalsal());