const Parent=require("../models/Parent")

exports.SaveUserApikey=async(req,res)=>{
    const UserApi=req.body.UserApikey
    const Provider=req.body.Provider
    let ParentID;
    const lastParent =
    await Parent.findOne().sort({
        ParentId:-1
    });
    if(lastParent){
        ParentID=lastParent.ParentId+1;

    }
    else{
        ParentID=1
    }
    const userkey=new Parent({
        ParentId:ParentID,
        Originalkey:UserApi,
        Provider:Provider,
    })
    await userkey.save()
    res.send("API Key saved successfully");
}