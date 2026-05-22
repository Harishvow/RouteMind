const mongoose=require("mongoose");

const Projectdetails=new mongoose.Schema({
    projectType:{
        type:String,
        required:true,
    },
    projectapikey:{
        type:String,
        required:true,

    }
})

const ProjectApiKey=mongoose.model("projectApiKey",Projectdetails);

module.exports = ProjectApiKey;