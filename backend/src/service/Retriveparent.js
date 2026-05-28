const Parent=require("../models/Parent")
const Child=require("../models/Child")

exports.RetriveId=async(userkey)=>{
    const child=await Child.findOne(
        {
            ProjectApikey:userkey
        }
    )
    const parentid=child.ApiId
    const Parentkey=await Parent.findOne({
        ParentId:parentid

    })
    const orginalkey=Parentkey.Originalkey
    return orginalkey



}