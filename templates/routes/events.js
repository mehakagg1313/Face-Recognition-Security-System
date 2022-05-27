var express=require("express")
const router=express.Router({mergeParams:true})

const db=require("../models")

createWorkshop= async function(req,res,next){
    try{
        var {venue,name,description,imageURL,time,date,link}=req.body
        let workshop=await db.Workshops.create({
            venue,
            name,
            imageURL,
            time,
            date,
            link,
            description
        })
        return res.status(200).json(workshop);

    }catch(e){
        return next(e);
    }
}

deleteWorkshop= async function(req,res,next){
    try{
        let found_event=await db.Workshops.findById(req.params.event_id)
        await found_event.remove();
        return res.status(200).json(found_event)
    }catch(e){
        return next(e);

    }
}

viewWorkshops=async function(req,res,next){
    try{
        let workshops=await db.Workshops.find({});
        return res.status(200).json(workshops);
    }catch(e){
        return next(e);

    }
}

createHackathon= async function(req,res,next){
    try{
        var {venue,name,imageURL,description,time,date,link,registerLink}=req.body
        let hackathon=await db.Hackathons.create({
            venue,
            name,
            imageURL,
            time,
            date,
            link,
            description
        })
        return res.status(200).json(hackathon);

    }catch(e){
        return next(e);
    }
}

deleteHackathon= async function(req,res,next){
    try{
        let found_event=await db.Hackathons.findById(req.params.event_id)
        await found_event.remove();
        return res.status(200).json(found_event)
    }catch(e){
        return next(e);

    }
}

viewHackathons=async function(req,res,next){
    try{
        let hackathons=await db.Hackathons.find({});
        return res.status(200).json(hackathons);
    }catch(e){
        return next(e);

    }
}

createColab= async function(req,res,next){
    try{
        var {organization,imageURL,link,event}=req.body
        let colab=await db.Colabs.create({
            organization,
            imageURL,
            link,
            event
        })
        return res.status(200).json(colab);

    }catch(e){
        return next(e);
    }
}

deleteColab= async function(req,res,next){
    try{
        let found_event=await db.Colabs.findById(req.params.event_id)
        await found_event.remove();
        return res.status(200).json(found_event)
    }catch(e){
        return next(e);

    }
}

viewColabs=async function(req,res,next){
    try{
        let colabs=await db.Colabs.find({});
        return res.status(200).json(colabs);
    }catch(e){
        return next(e);

    }
}

router.route("/workshops")
.post(createWorkshop)
.get(viewWorkshops);

router.route("/hackathons")
.post(createHackathon)
.get(viewHackathons);

router.route("/colabs")
.post(createColab)
.get(viewColabs);

router.route("/workshops/:event_id")
.delete(deleteWorkshop);

router.route("/hackathons/:event_id")
.delete(deleteHackathon);

router.route("/colabs/:event_id")
.delete(deleteColab);

module.exports=router