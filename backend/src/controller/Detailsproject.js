const ProjectApiKey=require("../models/Project")

exports.Saveprojectdetails=async(req,res)=>{
    const projecttype=req.body.ProjectType
    const projectdetailsname=req.body.projectname

    const ProDetails=new ProjectApiKey({
        projectType:projecttype,
        projectName:projectdetailsname,
    })

    await ProDetails.save()
    res.send("Project  request succesfully")
}

