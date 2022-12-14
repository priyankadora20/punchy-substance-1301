const mongoose = require("mongoose") 

const gadgetsSchema =mongoose.Schema({
    image1:{
        type:String,
      
        
    },
    images:[],
    name:{
        type:String,
       
   
    },
    price:{
        type:Number,
       
   
    },
    about:{
        type:String,
      
   
    },
    category:{
        type:String,
        enum:["electronics","vehicle","geeks"]
    },
})
const GadgetsModel = mongoose.model("gadgets",gadgetsSchema)

module.exports ={GadgetsModel}