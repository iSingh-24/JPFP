// const Sequelize = require("sequelize"); //for things like Sequelize.STRING
// //import your db
// const { db } = require("../db");
// const { DataTypes } = Sequelize;

// //define your model

// const Student = db.define("student", {
//     id: {
//       type: DataTypes.UUID,
//       primaryKey: true,
//       defaultValue: DataTypes.UUIDV4,
//     },
//     firstName: {
//       type: DataTypes.STRING(15),
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     lastName: {
//       type: DataTypes.STRING(15),
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     email: {
//       type: DataTypes.STRING(50),
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//         isEmail: true,
//       },
//     },
//     imageUrl: {
//       type: DataTypes.STRING(1000),
//       defaultValue: "default-image-value",
//     },
//     gpa: {
//       type: DataTypes.FLOAT,
//       validate: {
//         max: 4,
//         min: 0,
//       },
//     },
//   });
// //define any class or instance methods

// //export your model

// module.exports = { Student };
