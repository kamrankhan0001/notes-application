// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Note = sequelize.define('Note', {
//   title: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   content: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   createdAt: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
//   updatedAt: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
// }, {
//   tableName: 'notes_table',
//   timestamps: true,
// });

// module.exports = Note;


const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import sequelize instance

const Note = sequelize.define('Note', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'notes_table', // Map to the table name
  timestamps: false // Disable automatic timestamps as you have your own
});

module.exports = Note;
