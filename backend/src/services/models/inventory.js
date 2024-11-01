import {mongoose, Schema} from 'mongoose';

const inventorySchema = new Schema({
    nameInventory: {type:String, required:true},
    quantityInventory:{type:Number, required:true},
    idSuppliers: {type:Schema.ObjectId, ref: 'Suppliers', required:true}
});

export const Inventory = mongoose.model('Inventory', inventorySchema); 