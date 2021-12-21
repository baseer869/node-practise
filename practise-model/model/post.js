const  { DataTypes} = require('sequelize'); 
const sequelize = require('../db');

const Post =  sequelize.define('Post',{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descr:{
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Post;