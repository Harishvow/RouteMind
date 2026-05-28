const Child = require("../models/Child")
const Parent=require("../models/Parent")

exports.Saveprojectdetails=async(req,res)=>{
    const projectdetailsname=req.body.projectname
    const apikey=Math.random().toString(36).substr(2,10)
    const Parentid= await Parent.findOne({},
        "ParentId",
    )
    const ChildID= new Child({
        ProjectApikey:apikey,
        ProjectName:projectdetailsname,
        ApiId:Parentid.ParentId
    })

    
    await ChildID.save()
    res.send("Project  request succesfully")
}


