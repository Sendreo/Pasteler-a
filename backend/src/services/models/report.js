import {mongoose, Schema} from 'mongoose';

const reportSchema = new Schema({
    earnings: {type:Number, required:true},
    sales: {type:Number, required:true},
    weekTotal: {type:Number, required:true},
    monthTotal: {type:Number, required:true},
    yearTotal: {type:Number, required:true},
    idSales: {type:Schema.ObjectId, ref: 'Sales', required:true}
});


export const Report = mongoose.model('Report', reportSchema);