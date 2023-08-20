
const express=require('express')
const app=express()
const cors=require('cors')
const { connection } = require('./db')
app.use(cors())


app.get("/",(req,res)=>{
res.send(`hello`)


})


app.listen(process.env.port,async ()=>{

    try {
        await connection
        console.log(`connected to db`)
    } catch (error) {
        console.log(error)
    }
    console.log(`connected to port : ${process.env.port}`)
})