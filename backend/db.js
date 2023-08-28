const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://gofood:gofood@cluster0.lbnke8w.mongodb.net/?retryWrites=true&w=majority"
const mongoDB=()=>{
mongoose.connnect(mongoURI,()=>{
    console.log("Connected successfully");
    });
}
    
module.exports = mongoDB;