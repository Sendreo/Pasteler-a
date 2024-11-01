import mongoose from 'mongoose'


const uri = "mongodb+srv://gentsgentleman:gentsgentleman7743@clauster1.zfn7x48.mongodb.net/pasteleria"

const connection = async ()=>{
    try {
        await mongoose.connect(uri);
        console.log('Succesful connection to database');
    } catch (error) {
        console.log('Error to connect to database: ' + error);
        process.exit(1);
    }
}

export default connection;