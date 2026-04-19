let num=10
function printNumbers(){
    console.log(num);   
    if(num<20){
        num++
        printNumbers() 
    }
    
}

printNumbers()