class Temperature{
    doC;
    constructor(doC) {
        this.doC=doC;
    }
    getdoC(){
        return this.doC
    }
    getDoF(){
        return this.doC*1.8+32;
    }
    getDoK(){
        return this.doC+273.15;
    }
}