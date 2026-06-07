const mongoose = require("mongoose");

const Parentschema=new mongoose.Schema({
    ParentId:{
        type:Number,
        required:true,
        unique:true
    },
    Originalkey:{
        type:String,
        required:true,
    },
    Provider:{
        type:String,
        required:true,

    }
})
const Parent=mongoose.model("Parent",Parentschema);
module.exports=Parent;
