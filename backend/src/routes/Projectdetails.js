const express=require("express");
const {SaveUserApikey} = require("../controller/Userapikey");
const {Saveprojectdetails} = require("../controller/Detailsproject");
const {getUser} = require("../controller/Getuser")
const rateLimiter=require("express-rate-limit")

const limiter=rateLimiter({
    windowMs:60*1000,
    max:10,
    message:"Too many requests limit exceeded,please try agian after minute"
})

const router=express.Router();


router.post("/UserApiKey",SaveUserApikey)
router.post("/ProjectDetails",Saveprojectdetails,)
router.post("/getApiKey",limiter,getUser)

module.exports = router;