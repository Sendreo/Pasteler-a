import mongoose, { Schema } from 'mongoose';

const usersSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    username: { type: String, required: true, unique: true }, 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true }
}, { timestamps: true });

export const Users = mongoose.model('User', usersSchema);
