const mongoose= require("mongoose");

const ChildId=new mongoose.Schema({
    ProjectApikey:{
        type:String,
        required:true,
    },
    ProjectName:{
        type:String,
        required:true,
    },

    ApiId:{
        type:String,
        required:true,

    }
})
const Child=mongoose.model("Child", ChildId)
module.exports=Child;
