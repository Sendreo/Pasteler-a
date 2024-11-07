import mongoose, { Schema } from 'mongoose';

const productsSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true }, // Cambiado a Number
    price: { type: Number, required: true },
    description: { type: String, required: true },
    labels: [{type:String}],
    image: { type: String, required: true },
    inventory: { type: Schema.ObjectId, ref: 'Inventory'}
});

export const Products = mongoose.model('Products', productsSchema);
