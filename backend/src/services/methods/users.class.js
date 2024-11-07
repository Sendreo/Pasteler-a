import {Users} from '../models/users.js'
import bcrypt  from 'bcrypt';
import { generateToken } from '../../utils/generateToken.js';
export class User{
    static async register(data){
        const existingUser = await Users.findOne({or: [{username: data.username}, {email: data.email}]})
        if(existingUser){
            throw new Error("Usuario ya registrado");
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        const newUser = new Users(data);
        await newUser.save()
        return newUser;
    }
    static async login(data){
        const user = await Users.findOne({ $or: [{ username: data.username }, { email: data.email }] });
        if (!user) {
            throw new Error('User not found');
        }

        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) {
            throw new Error('Incorrect password');
        }
        const userId = user._id;
        const username = user.username;
        const email = user.email;

        const token = generateToken({ userId, username, email });
        return token;
    }
    static async updateUser(id,data){
        return Users.findByIdAndUpdate(id, data, { new: true });
    }
    static async deleteUser(id){
        return Users.findByIdAndDelete(id);
    }
}