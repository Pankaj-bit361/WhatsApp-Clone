
const express=require(`express`)
const { UserModel } = require("../Models/user.model")

const UserRouter=express.Router()


UserRouter.get(`/`,async(req,res)=>{
    try {
        let user=await UserModel.find()
        res.send(user)
    } catch (error) {
        res.send({msg:error.message})
    }
})


UserRouter.post('/' ,async(req,res)=>{
 let {email}=req.body
 const exist=await UserModel.findOne({email})
 try {
    if(exist){
        res.send(`user already exist`)
     }else{
        let newuser=new UserModel(req.body)
        await newuser.save()
        res.status(200).send({msg:`user registered successfully`})
     }
    
 } catch (error) {
    res.send({err:error.message})
 }

})
  
module.exports={
    UserRouter
}