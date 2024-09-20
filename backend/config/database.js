// const { Sequelize } = require('sequelize');

// require('dotenv').config();

// // Create a new Sequelize instance with your database credentials
// const sequelize = new Sequelize('pointo_schema', 'root', '12345', {
//   host: 'localhost',
//   dialect: 'mysql',
//   logging: false, // Set to true if you want to see SQL queries logged
// });

// module.exports = sequelize;


const Sequelize = require('sequelize');
const sequelize = new Sequelize('pointo_schema', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
