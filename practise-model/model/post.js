const  {Sequelize, DataTypes} = require('sequelize');

const Post =   Sequelize.define('Post',{
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