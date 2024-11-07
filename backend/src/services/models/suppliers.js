import mongoose, { Schema } from 'mongoose';

const contactInfoSchema = new Schema({
    phoneNumber: { type: String },
    email: { type: String, match: /.+\@.+\..+/ },
    location: { type: String },
    socialMedia: [{ type: String }] 
});

const suppliersSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    products: [{ type: Schema.ObjectId, ref: 'Products' }], 
    contacts: [contactInfoSchema],
    cost: { type: Number },
    deliveryDate: { type: Date }
});

export const Suppliers = mongoose.model('Suppliers', suppliersSchema);
