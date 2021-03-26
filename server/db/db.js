const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
//initialize your db, don't forget to include the possible heroku database URL
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/schooldb"
);

// const { Student } = require("./models/Student");
// const { Campus } = require("./models/Campus");

const Student = db.define("student", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  firstName: {
    type: DataTypes.STRING(15),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: DataTypes.STRING(15),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: DataTypes.STRING(1000),
    defaultValue: "default-image-value",
  },
  gpa: {
    type: DataTypes.FLOAT,
    validate: {
      max: 4,
      min: 0,
    },
  },
});

const Campus = db.define("campus", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING(50),
  },
  imgUrl: {
    type: DataTypes.STRING(1000),
    defaultValue: "default-image.jpg",
  },
  address: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.STRING(20000),
  },
});

Student.belongsTo(Campus);
Campus.hasMany(Student);

const syncAndSeed = async () => {
  await db.sync({ force: true });

  const [shanu, doop, hogwarts, assassinationClassroom] = await Promise.all([
    Student.create({
      firstName: "Shanu",
      lastName: "Aloo",
      email: "sarb@hotmail.com",
      imageUrl: "shawn.jpg",
      gpa: 3.4,
    }),
    Student.create({
      firstName: "Doop",
      lastName: "Derp",
      email: "derpak@gmail.com",
      imageUrl: "tucanSam.jpg",
      gpa: 3.2,
    }),
    Campus.create({
      name: "Hogwarts",
      address: "Address for Hogwarts",
      description: "HELLO WELCOME TO HOGWARTS!",
    }),
    Campus.create({
      name: "Assassination Classroom",
      address: "Address for Assassination Classroom",
      description: "HELLO WELCOME TO ASSASSINATION CLASSROOM",
    }),
  ]);

  shanu.campusId = hogwarts.id;

  await Promise.all([
    shanu.save(),
    doop.save(),
    hogwarts.save(),
    assassinationClassroom.save(),
  ]);
};
//export your db

module.exports = {
  db,
  syncAndSeed,
  Student,
  Campus,
};
