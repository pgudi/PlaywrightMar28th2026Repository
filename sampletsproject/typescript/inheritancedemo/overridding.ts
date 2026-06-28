class CapitalCity{
    showCityName(cityname:string){
        console.log("The Capital City Name :"+cityname);
    }
}

class MetropolitanCity extends CapitalCity{
    constructor(cityname:string){
        super()
        super.showCityName(cityname)
    }

    showCityName(cityname:string){
        console.log("The Metropolitan City Name :"+cityname);
    }
}

let obj1=new MetropolitanCity("Bangalore")
obj1.showCityName("Mumbai")
