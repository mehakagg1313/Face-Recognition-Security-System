const { response } = require("express")
const nodemailer=require("nodemailer")

const mailGun=require("nodemailer-mailgun-transport")


async function sendMyMail(sender,subject,body){
    try{
        const auth={
            auth:{
                api_key:process.env.API_KEY,
                domain:process.env.MAIL_DOMAIN
            }
        }
        const transporter=await nodemailer.createTransport(mailGun(auth))


        const mailOptions={
            from:sender,
            to:"aiclubigdtuw@gmail.com",
            subject:subject,
            text:body
        }

        var res=await transporter.sendMail(mailOptions)
        console.log("response is",res)
        if(res!=null && res.id!=null){
            return "success"
        }else{
            return "fail"
        }

    }catch(err){
        return err;
    }
    
}

module.exports={
    sendMail:sendMyMail
}
