const {decryptApikey} = require("../service/Encryption")
const ApiKeyUser= require("../models/Apikey")

exports.getChat = async (req,res)=>{
    const UserChatapi=req.body.ApiKey
    const Message=req.body.message
    const encryptandiv =await ApiKeyUser.findOne(
        { UserApiKey: UserChatapi }
    )
   
    const decryptedKey=decryptApikey(
        encryptandiv.UserApiKey,
        encryptandiv.iv,
    )
    res.send(decryptedKey)

    

}
