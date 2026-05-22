const mongoose=require("mongoose")

const Apikeydetail=new mongoose.Schema({
    UserApiKey:{
        type:String,
        required:true,
    },
    Originalkey:{
        type:String,
        required:true,

    }
})

const ApikeyUser=mongoose.model("ApiKeyUser",Apikeydetail)

module.exports=ApikeyUser