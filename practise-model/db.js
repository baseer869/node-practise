const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('practise', 'root', 'root',   {
    host:'localhost',
    dialect:'mysql'
});


try {
    sequelize.authenticate().then(()=>{
        console.log('connected to db')
    })
} catch (error) {
    console.log('unable to connect to db')

}
module.exports = sequelize 