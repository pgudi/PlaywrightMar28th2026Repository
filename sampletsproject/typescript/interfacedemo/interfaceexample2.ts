interface University{
    showUniversityName(uname:string):void;
}

interface College extends University{
    showCollegeName(cname:string):void;
}

class LVDCollege implements College{
    showUniversityName(uname:string):void{
        console.log("The University Name is "+uname);
    }

    showCollegeName(cname:string):void{
        console.log("The College Name is "+cname);
    }
}

let obj1=new LVDCollege()
obj1.showUniversityName("Bangalore University")
obj1.showCollegeName("LVD College")
