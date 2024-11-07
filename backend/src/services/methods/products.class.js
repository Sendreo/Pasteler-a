import {Products} from '../models/products.js';


export class Product{
    static async addProduct(data){
        const newProduct = new Products(data);
        await newProduct.save()
        return newProduct;
    }
    static async modifyProduct(id,data){
        return Products.findByIdAndUpdate(id, data, {new:true});
    }
    static async deleteProducts(id){
        return Products.findByIdAndDelete(id); 
    }
    static async allProducts(){
        return Products.find();
    }
}