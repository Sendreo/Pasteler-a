import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
    name: {type:String, required: true},
    surname: {type:String, required:true},
    username: {type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
}, {timestamps:true});

export const User = mongoose.model('User', usersSchema);