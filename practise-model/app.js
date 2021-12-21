console.log("hello");

const express = require('express');
const router = express.Router();
const app = express()


//model 
const  post = require('./model/post');

// app.use(post)
app.get('/',(req, res)=>{
res.send({
    name:"ahmed"
})
});

app.listen(3000, ()=>{
    console.log('server is running on http://localhost:3000')
});

require('./db');