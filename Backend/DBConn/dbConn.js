const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://Md-Service:AbXyz123@cluster0.gqfscmy.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
     console.log("DB Connected Successully");
})