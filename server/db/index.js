//import your db
//import your models
const { db } = require("./db");
const Student = require("./models/Student");
const School = require("./models/School");

module.exports = {
  db,
  Student,
  School,
};
