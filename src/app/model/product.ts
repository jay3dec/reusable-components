export class Product{
    public name : String;
    public description : String;
    public price : number;

    constructor(name, desc, price){
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}