const ApikeyUser=require("../models/Apikey")

exports.getUser=async(req,res)=>{
    const Userdata=await ApikeyUser.find(
        {},
        "UserApiKey"
    )
    res.json(Userdata.map(item => item.UserApiKey))
}