const express=require("express");
const {SaveUserApikey} = require("../controller/Userapikey");


const router=express.Router();


router.post("/UserApiKey",SaveUserApikey)

module.exports = router;