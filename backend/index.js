import express from 'express'
import connection from './src/services/database.js'

const app = express()

const startServer = async ()=>{
    await connection();

    app.listen(3000, () =>{
        console.log("Escuchando puerto 3000")
    });
};

startServer();




