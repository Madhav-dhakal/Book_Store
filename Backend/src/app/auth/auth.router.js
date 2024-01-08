const router=require('express').Router()

// auth and authorization
router.post("/register",(req,res,next)=>{})
router.get("/veriy-token/:token",(req,res,next)=>{})
router.post("/set-password/:token",(req,res,next)=>{})
router.post('/login',(req,res,next)=>{})
router.get('/me',(req,res,next)=>{},(req,res,next)=>{})
router.post("/logout",(req,res,next)=>{})

module.exports = router