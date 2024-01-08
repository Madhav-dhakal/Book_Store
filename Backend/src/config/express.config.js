const express = require("express")
const app = express()
const router=require('../router')
const DbConn= require("../../DBConn/dbConn")

    //body parser
    app.use(express.json())
    app.use(express.urlencoded({
     extended:false  // qs library
    }))

   app.use('/health',(req,res,next)=>{
     res.send("success Ok")
   })
     
     app.use('/api/v1',router)
 
     //404 routes handling
     app.use((req,res,next)=>{
          res.status(404).json({
               result:null,
               message:"Not Found",
               meta:null
          })
     })

     // Garbage collector or error handling
     app.use((error,req,res,next)=>{
          let code = error.code??500
          let message=error.message??"500 internal server error"
          
          res.status(code).json({
           result:null,
           message:message,
           meta:null
          })
     })

module.exports =app