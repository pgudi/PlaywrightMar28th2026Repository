class Bank{
    constructor(){
        let bankName, accountNo
    }

    setBankName(bankName){
        this.bankName=bankName
    }

    setAccountNo(accountNo){
        this.accountNo=accountNo
    }

    getBankName(){
        return this.bankName
    }

    getAccountNo(){
        return this.accountNo
    }
}

let o=new Bank()
o.setBankName("ICICI Bank")
o.setAccountNo(11000001)
console.log(o.getBankName());
console.log(o.getAccountNo());

