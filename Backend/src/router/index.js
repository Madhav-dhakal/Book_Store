const router =require("express").Router()
const authRouter=require('../app/auth/auth.router')
const bookRouter=require('../app/Book/book.router')

router.use(authRouter)
router.use(bookRouter)

 

        let CheckLoggIn=(req,res,next)=>{
          let loggedIn =true;
          if(loggedIn){
               next()
          }
          else{
            res.status(400).json({
               result:null,
               message:"not loggedIN",
               meta:null
            })
          }
    
          router.post('/category',CheckLoggIn,(req,res,next)=>{
               //
          })
        }

module.exports = router