'use strict';


const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')["development"];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Student=require('./Student')(sequelize);
db.Classes=require('./Classes')(sequelize);
db.StudentProfile=require('./StudentProfile')(sequelize);

db.Student.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Student);

db.Student.hasMany(db.Classes);
db.Classes.belongsTo(db.Student);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
