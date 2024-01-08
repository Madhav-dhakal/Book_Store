const mongoose=require("mongoose");
const BookSchema= new mongoose.Schema({
     bookname:{
          type:String,
          required:true
     },
     description:{
          type:String,
          required:true
     },
     author:{
          type:String,
          required:true
     },
     
     image:[String],
          
     price:{
          type:Number,
          required:true
     },
     
})
     const BookModel=new mongoose.model("Books", BookSchema)
     module.exports=BookModel;