export {}

class Department{
    id!:number;
    dname!:string;
    loc!:string
    constructor()
    constructor(id:number,dname:string,loc:string)

    constructor(id?:number,dname?:string,loc?:string){
        if(id!=undefined && dname!=undefined && loc!=undefined){
            this.id=id
            this.dname=dname
            this.loc=loc
            console.log(this.id,this.dname,this.loc);
        }else{
            console.log("It is a No-Args constructor!!");
            
        }
    }

}

let o=new Department(10,"Accounting","Dallas")

let o2=new Department()
