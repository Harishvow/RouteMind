const RetriveId=require("../service/Retriveparent")

exports.getUser=async(req,res)=>{
     const userkey=req.body.Userapikey
     const Message=req.body.message
    const llmapikey=await RetriveId.RetriveId(userkey)
    res.send({"apikey":llmapikey,"Message":Message})
}