
const express = require('express');
const sequelize = require('./db');
const router = express.Router();
const app = express();


//model 
const Post = require('./model/post');

// app.get('/', async (req, res) => {
//     sequelize.sync().then(async () => {
//         const post = await Post.create({
//             descr: "helo",
//             title: "hello there"
//         })
//         if (post) {

//             res.send({
//                 name: "ahmed"
//             })
//         }
//     })

// });

app.get('/l', async (req, res) => {
    try {
        let list;
        list = await Post.scope('isTitle', 'descr').findAll({});
        if (list) {
            return res.send({
                code: 200,
                message: 'fetch successfull',
                error: false,
                data: list
            })
        }
        return res.send({
            code: 200,
            message: 'Post empty',
            error: false,
            data: list
        })

    } catch (error) {
        return res.send({
            code: 400,
            message: 'Not Found',
            error: true
        })
    }
})

app.use((req, res) => {
    return res.send({
        code: '2',
        message: 'cannot find url',
        error: false
    })
})
// get post by condition 
// app.get('/posts', async (req, res)=>{
//     const post = await Post.findAll()
//     if(post){
//         return res.send({
//             message:'list of post',
//             post
//         })
//     }
// })

// app.use('/', function (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     // next()
//   }, function (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
//   })

// app.use((req, res, next)=>{
//     console.log("First logged!");
//     req.say ='hello word'
//     next();
// }, function(req, res, next){
//     console.log( req.say + 'baseer ahmed');
//     res.end();
// });



app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
});

require('./db');