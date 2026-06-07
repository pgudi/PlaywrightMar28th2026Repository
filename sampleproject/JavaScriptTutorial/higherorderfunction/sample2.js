let radius=[2,3,1,4,5]

let area=function(radius){
    return (Math.PI*radius*radius)
}

let circuference=function(radius){
    return (2 * Math.PI * radius)
}

let diameter=function(radius){
    return (2 * radius)
}

let calculate=function(radius, formula){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(formula(radius[i]))
    }
    return result
}

console.log(calculate(radius,area))
console.log(calculate(radius,circuference))
console.log(calculate(radius,diameter))
