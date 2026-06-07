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

Array.prototype.calculate=function(formula){
    let result=[]
    for(let i=0;i<this.length;i++){
        result.push(formula(this[i]))
    }
    return result
}

console.log(radius.calculate(area))
console.log(radius.map(area))
