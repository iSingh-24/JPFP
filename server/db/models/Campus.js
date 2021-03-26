// const Sequelize = require("sequelize");
// const { db } = require("../db");
// const { DataTypes } = Sequelize;

// const Campus = db.define("campus", {
//     id: {
//       type: DataTypes.UUID,
//       primaryKey: true,
//       defaultValue: DataTypes.UUIDV4,
//     },
//     name: {
//       type: DataTypes.STRING(50),
//     },
//     imgUrl: {
//       type: DataTypes.STRING(1000),
//       defaultValue: "default-image.jpg",
//     },
//     address: {
//       type: DataTypes.STRING(1000),
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     description: {
//       type: DataTypes.STRING(20000),
//     },
//   });

// module.exports = {
//   Campus,
// };
