
export let studentName:string="Santosh";
export let studentLocation:string="California"

export function showStudentCourseName(name:string){
    console.log("Course Name of the Student :"+name);
}

export class Library{
    bookName!:string
    authorName!:string
    constructor(bookName:string, authorName:string){
        this.bookName=bookName
        this.authorName=authorName
    }

    showBookInformation():void{
        console.log("Book Name :"+this.bookName);
        console.log("Author Name :"+this.authorName);
    }
}