//import your db
//import your models
const { db } = require("./db");
const Student = require("./models/Student");
const School = require("./models/School");
//state your model associations (hasOne etc)

// Student.belongsTo(School);
// School.hasMany(Student);

//export your db and Models (so they all can be imported from a single central location)

module.exports = {
  db,
  Student,
  School,
};
