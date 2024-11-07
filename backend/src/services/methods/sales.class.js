import {Sales} from '../models/Sales.js';


export class SalesClass {
    static async addSale(data){
        const newSale = new Sales(data);
        await newSale.save();
        return newSale;
    }
    static async AllSales(){
        return Sales.find();
    }
    static async updateSales(id,data){
        return Sales.findByIdAndUpdate(id, data, {new:true});
    }
    static async deleteSales(id){
        return Sales.findByIdAndDelete(id);
    }
}