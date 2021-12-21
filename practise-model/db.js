const {Sequelize} = require('sequelize');
const sequelzie = new Sequelize('practise', 'root', 'root',   {
    host:'localhost',
    dialect:'mysql'
});


try {
    sequelzie.authenticate().then(()=>{
        console.log('connected to db')
    })
} catch (error) {
    console.log('unable to connect to db')

}
