function greet(fname, func){
    console.log("Hello :"+fname);
    func();
}

greet("Santosh", function(){
    console.log("Good Afternoon");
})