const express=require("express");
const {SaveUserApikey} = require("../controller/Userapikey");
const {Saveprojectdetails} = require("../controller/Detailsproject");
const {getUser} = require("../controller/Getuser")



const router=express.Router();


router.post("/UserApiKey",SaveUserApikey)
router.post("/ProjectDetails",Saveprojectdetails,)
router.get("/getApiKey",getUser)

module.exports = router;