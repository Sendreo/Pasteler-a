import {mongoose, Schema} from 'mongoose';

const contactInfo = new Schema({
    numberPhone: { type: String },
    email: { type: String, match: /.+\@.+\..+/ },
    location: { type: String },
    socialMedia: { type: String }
});


const suppliersSchema = new Schema({
    nameSupplier:{type:String, required:true},
    adressSupplier: {type:String, required:true},
    products: {type:String},
    contacts: [contactInfo],
    cost: {type:Number},
    deliveryDate: {type:Date} 
});

export const Suppliers = mongoose.model('Suppliers', suppliersSchema);

