import {mongoose, Schema} from 'mongoose';

const salesSchema = new Schema({
    date: {type:Date, required:true},
    hour: {type:String, required:true},
    paymentMethod:{type:String, required:true},
    quantity:{type:Number, required:true},
    total:{type:Number, required:true},
    idProduct: {type:Schema.ObjectId, ref: 'Products', required:true},
    idSuppliers: {type:Schema.ObjectId, ref: 'Suppliers', required:true}
});

export const Sales = mongoose.model('Sales', salesSchema);