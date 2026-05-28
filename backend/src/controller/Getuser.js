const RetriveId=require("../service/Retriveparent")

exports.getUser=async(req,res)=>{
     const userkey=req.body.Userapikey
    const llmapikey=await RetriveId.RetriveId(userkey)
    res.send(llmapikey)
}