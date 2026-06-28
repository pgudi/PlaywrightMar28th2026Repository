export{}
class Student{
    rollNo!:number;
    studName!:string;
    courseName!:string;
    constructor(rollNo:number,studentName:string,course:string){
        this.rollNo=rollNo
        this.studName=studentName
        this.courseName=course
    }

    showStudentDetails():void{
        console.log("Student roll Number :"+this.rollNo);
        console.log("Student Name :"+this.studName);
        console.log("Student Course Name :"+this.courseName);
    }
}

let stud1=new Student(107,"Santosh","Science and Physics");
stud1.showStudentDetails()
