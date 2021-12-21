console.log("hello");

const express = require('express');
const sequelize = require('./db');
const router = express.Router();
const app = express()


//model 
const  Post = require('./model/post');

// app.use(post)

app.get('/', async (req, res)=>{
    sequelize.sync().then( async ()=>{
        const post = await Post.create({
            descr:"this is new note",
            title:"this is title"
        })
        if(post){
         
    res.send({
        name:"ahmed"
    })   
        } 
    })
   
});

app.listen(3000, ()=>{
    console.log('server is running on http://localhost:3000')
});

require('./db');