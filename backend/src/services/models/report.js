import mongoose, { Schema } from 'mongoose';

const reportSchema = new Schema({
    earnings: { type: Number, required: true },
    salesCount: { type: Number, required: true },
    sales: [{ type: Schema.ObjectId, ref: 'Sales' }], // Array para múltiples ventas
});

export const Report = mongoose.model('Report', reportSchema);
