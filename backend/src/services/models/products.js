import {mongoose, Schema} from 'mongoose';

const productsSchema = new Schema({
    nameProduct: {type:String, required:true},
    category: {type:String, required:true},
    stock: {type:String, required:true},
    price: {type:Number, required:true},
    description: {type:String, required:true},
    imagen: {type:String, required:true},
    idInventory: {type:Schema.ObjectId, ref: 'Inventory', required:true}
});

export const Products = mongoose.model('Products', productsSchema);