const router=require('express').Router()
const BookModel=require("./book.Model")

router.post("/add",(req,res,next)=>{
     try{
     const data = req.body;
     const newBook = new BookModel(data)
      newBook.save()
     res.json({
          result:newBook,
          message:"Book addedd succesfully",
          meta:null
     })
     }
     catch(exception){
          next(exception)
     }
})

 router.get("/retrieve",async(req,res,next)=>{
     try{
          let book=await BookModel.find();
          res.json({
               result:book,
               message:"Bookdetail fetched successfully",
               meta:null
          })
     }
     catch(exception){
          next(exception)
     }
 })

 router.get("/retrieve/:id",async(req,res,next)=>{
     try{
          let id=req.params.id;
          let book=await BookModel.findById(id);
          res.json({
               result:book,
               message:"Bookdetail fetched successfully By Id",
               meta:null
          })
     }
     catch(exception){
          next(exception)
     }
 })

 router.put("/update/:id",async(req,res,next)=>{
     let id=req.params.id;
     const {bookname,price}=req.body;
     try{
     const book=await BookModel.findByIdAndUpdate(id,{
          bookname,
          price
     })
      book.save();
     res.json({
          result:book,
          message:"Data updated successfully By Id",
          meta:null
     })
}
         catch(exception){
          next(exception)
         }
 })

 router.delete("/delete/:id",async(req,res,next)=>{
     let id=req.params.id;
     try{
     const book=await BookModel.findByIdAndDelete(id)
     
     res.json({
          result:book,
          message:"Data deleted successfully By Id",
          meta:null
     })
}
         catch(exception){
          next(exception)
         }
 })
module.exports=router;