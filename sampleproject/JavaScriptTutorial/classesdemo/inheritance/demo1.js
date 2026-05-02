class Student{
    showFirstName(firstname){
        console.log("First Name of Student :"+firstname);
        
    }

    showCouseName(courseName){
        console.log("Course Name of Student :"+courseName);
    }
}

class Library extends Student{
    displayBookName(bookName){
        console.log("Book Name :"+bookName); 
    }
}

let o=new Library()
o.displayBookName("Java Complete Reference")
o.showFirstName("Santosh")
o.showCouseName("Research and Science")