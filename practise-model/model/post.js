const  { DataTypes} = require('sequelize'); 
const sequelize = require('../db');

const Post =  sequelize.define('User',{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Post;