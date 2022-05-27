const mongoose=require("mongoose")

const hackathonSchema=new mongoose.Schema({
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


const Hackathons=mongoose.model("Hackathons",hackathonSchema)
module.exports=Hackathons