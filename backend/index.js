import express from 'express'

const app = express()

app.use("/", (req, res)=>{
    res.send("helloworld")
})

app.listen(3000, () =>{
    console.log("Escuchando puerto 3000")
})


