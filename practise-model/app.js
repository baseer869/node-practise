console.log("hello");

const express = require('express');
const app = express()

//model 
// const  Post = require('./model/post');

// app.use(Post)




app.listen(3000, ()=>{
    console.log('server is running on http://localhost:3000')
});

require('./db');