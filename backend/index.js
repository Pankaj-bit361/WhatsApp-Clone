
const express=require('express')
const app=express()
const cors=require('cors')
const { connection } = require('./db')
const { UserRouter } = require('./Routes/user.route')
const { ChatRouter } = require('./Routes/chat.route')
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
res.send(`hello`)
})

app.use("/users",UserRouter)   
app.use("/chat",ChatRouter)
    
app.listen(process.env.port,async ()=>{

    try {
        await connection
        console.log(`connected to db`)
    } catch (error) {
        console.log(error)
    }
    console.log(`connected to port : ${process.env.port}`)
})    