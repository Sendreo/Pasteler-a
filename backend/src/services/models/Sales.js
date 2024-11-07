import mongoose, { Schema } from 'mongoose';

const salesSchema = new Schema({
    dateTime: { type: Date, required: true }, 
    paymentMethod: { type: String, required: true },
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
    product: { type: Schema.ObjectId, ref: 'Products', required: true }
});

export const Sales = mongoose.model('Sales', salesSchema);
