const express =require('express');
const fs=require('fs');
const route=express.Router();
const controller=require('../controller/controller');
const filepath = "./server/database/data.json";
const fileContents = fs.readFileSync(filepath, 'utf-8');
const data = JSON.parse(fileContents);

//get
route.get('/',(req,res)=>{
  
    res.render("index.ejs",{users:data});
});
//get add-user
route.get('/add-user',(req,res)=>{
    res.render("add_user.ejs");
});
//update-user
route.get('/update-user',(req,res)=>{
    let id=req.query.id;
   
    res.render("update_user.ejs",{users:data[id-1]});
});



//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.get('/api/users/:id',controller.findById)
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);



module.exports=route;