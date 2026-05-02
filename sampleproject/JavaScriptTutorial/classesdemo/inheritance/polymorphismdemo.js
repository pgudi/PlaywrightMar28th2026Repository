class GeometricFigure{
    area(){
        console.log("Area of a Geometric Figure!!");
    }
}

class Square extends GeometricFigure{
    area(){
        let side=5
        console.log("Area of a Sqaure :"+(side * side));
    }
}

class Rectangle extends GeometricFigure{
    area(){
        let length=5, breadth=10
        console.log("Area of a Rectangle :"+(length * breadth));
    }
}

class Circle extends GeometricFigure{
    area(){
        let pi=3.14
        let radius=5.0
        console.log("Area of a Cicle :"+(pi * radius * radius));
    }
}

let obj=new GeometricFigure()
obj.area()

obj=new Square()
obj.area()

obj=new Rectangle()
obj.area()

obj=new Circle()
obj.area()