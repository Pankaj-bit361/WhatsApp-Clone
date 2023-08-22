
const express=require(`express`)
const { ChatModel } = require("../Models/chat.model")
const ChatRouter=express.Router()

ChatRouter.post("/",async(req,res)=>{
    const {recieverId,senderId}=req.body


    const exist =await ChatModel.findOne({members:{$all:[recieverId,senderId]}})

    if(exist){
        res.send(`chat already exist`)
    }else{
        let newchat=new ChatModel({members:[recieverId,senderId]})
        await newchat.save()
        res.send(`chat created successfully`)
    }


   
})


ChatRouter.get('/',async(req,res)=>{   
    try {
        let chat=await ChatModel.find()
        res.json(chat)
    } catch (error) {
        res.send({error:error.message})
    }
})

module.exports={

    ChatRouter
}