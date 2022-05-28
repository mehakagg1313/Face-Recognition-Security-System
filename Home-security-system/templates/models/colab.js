const mongoose=require("mongoose")

const colabSchema=new mongoose.Schema({
    organization:{
        type:String,
        required:true,
        maxlength:150
    },
    imageURL:{
        type:String
    },
    link:{
        type:String,
        required:true
    },
    event:{
        type:String
    }
})


const Colabs=mongoose.model("Colabs",colabSchema)
module.exports=Colabs