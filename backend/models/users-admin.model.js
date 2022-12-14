const mongoose = require("mongoose") 

const usersSchema =mongoose.Schema({
    name:{
        type:String,
       
   
    },
    email:{
        type:Number,
       
   
    },
    password:{
        type:String,
      
   
    },
    usertype:{
        type:String,
        enum:["customer","admin"]
    },
})
const UserModel = mongoose.model("user",userSchema)

module.exports ={UserModel}