const ApikeyUser = require("../models/Apikey")
const ApiKeyUser=require("../models/Apikey")

exports.SaveUserApikey=async(req,res)=>{
    const UserApi=req.body.UserApikey

    const userkey=new ApikeyUser({
        UserApiKey:UserApi,
        Originalkey

    })

    await userkey.save()
}