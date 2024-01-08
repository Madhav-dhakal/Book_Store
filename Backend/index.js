const http = require('http')
const app = require("./src/config/express.config")
const server = http.createServer(app)

server.listen('3007','localhost',(err)=>{
     if(!err){
          console.log("server running on port 3005");
          console.log("press ctrl+c to disconnect your server");
          console.log("use http://localhost:3007/ to browse your server");
     }
})