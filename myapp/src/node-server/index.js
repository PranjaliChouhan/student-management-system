var express=require("express");
var cors=require('cors');
var bodyParser=require('body-parser');


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
   console.log('db connected')
  
}

const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    Query:String
});

const User=mongoose.model('User',userSchema);



const server=express();
server.use(cors());
server.use(bodyParser.json());



    server.post('/',async(req,res)=>{
        let user= new User()
        user.username=req.body.username
        user.email=req.body.email
        user.Query=req.body.Query
       
       
        const doc= await user.save()
       
       
        console.log(doc)    
        res.json(doc)
});


server.get('/',async(req,res)=>{
    const docs=await User.find({});
    res.json(docs)
})

server.listen(8080,()=>{
    console.log('server started');
});

