let radius=[2,3,1,4,5]


let calculateArea=function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(Math.PI*radius[i]*radius[i])
    }
    return result
}

console.log(calculateArea(radius))

let calculateCircuference=function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(2 * Math.PI*radius[i])
    }
    return result
}
console.log(calculateCircuference(radius))

let calculateDiameter=function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(2 * radius[i])
    }
    return result
}
console.log(calculateDiameter(radius))