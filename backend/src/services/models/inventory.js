import mongoose, { Schema } from 'mongoose';

const inventorySchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    suppliers: { type: Schema.ObjectId, ref: 'Suppliers' } 
});

export const Inventory = mongoose.model('Inventory', inventorySchema);
