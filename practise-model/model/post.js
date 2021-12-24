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
},
{ 
    defaultScope:{
    where:{
        id: 8,
    }
    },
    scopes:{
        descr:{
            where:{
                descr: 'helo'
            }
        },
        isTitle:{
           where:{
               title:'hello there'
           } 
        }
    }
}

);





module.exports = Post;