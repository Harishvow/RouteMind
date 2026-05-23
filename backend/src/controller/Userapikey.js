const ApikeyUser = require("../models/Apikey")
const {encryptedApikey}=require("../service/Encryption")

exports.SaveUserApikey=async(req,res)=>{
    console.log("Controller reached");
    const UserApi=req.body.UserApikey
    const  encrypted=encryptedApikey(UserApi)
    

    const userkey=new ApikeyUser({
        UserApiKey:encrypted.encryptedData,
        iv:encrypted.iv

    })


    await userkey.save()
    res.send("API Key saved successfully");
}