const mongoose=require("mongoose")

const workshopSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:150
    },
    imageURL:{
        type:String
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    venue:{
        type:String,
        required:true
    },
    link:{
        type:String
    },
    description:{
        type:String
    }
})


const Workshops=mongoose.model("Workshops",workshopSchema)
module.exports=Workshops