const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const notesRoutes = require('./routes/notes');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 5000;



// Middleware
app.use(cors());
app.use(bodyParser.json());

const notes_table = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"12345",
  databse:"notes_table",
});

// API Routes
app.use('/api', notesRoutes);

//Sync Database and Start Server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
  });
 
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});


