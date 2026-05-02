class CapitalCity{
    
    show(cityname){
        console.log("The Capital CityName :"+cityname);
    }
}

class MetroCity extends CapitalCity{
   
    show(cityname){
        console.log("The Metro CityName :"+cityname);
    }
}

let obj=new CapitalCity()
obj.show("Bangalore")

obj=new MetroCity()
obj.show("Mumbai")

