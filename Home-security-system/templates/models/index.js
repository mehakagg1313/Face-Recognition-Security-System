const mongoose=require("mongoose")
mongoose.set("debug",true)
mongoose.Promise=Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/AIClub",{
    keepAlive:true,
    // useMongoClient:true
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Workshops=require("./workshop")
module.exports.Hackathons=require("./hackathon")
module.exports.Colabs=require("./colab")