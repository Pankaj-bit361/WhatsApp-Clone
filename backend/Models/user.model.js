
const mongoose = require(`mongoose`)
const UserSchema=mongoose.Schema({
    aud:{type:String,required:true},
    azp:{type:String,required:true},
    email:{type:String,required:true},
    family_name:{type:String,required:true},
    given_name:{type:String,required:true},
    picture:{type:String,required:true},
    sub:{type:String,required:true},
    iss:{type:String,required:true},
    jti:{type:String,required:true},
    locale:{type:String,required:true},
    name:{type:String,required:true},
    iat:{type:Number,required:true},
    nbf:{type:Number,required:true},
    exp:{type:Number,required:true},
    email_verified:{type:Boolean,required:true},
},{
    versionKey:false
})

const UserModel=mongoose.model("users",UserSchema)

module.exports={
    UserModel
}