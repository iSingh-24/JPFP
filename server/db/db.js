const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
//initialize your db, don't forget to include the possible heroku database URL
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/schooldb",
  { logging: false }
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
    defaultValue:
      "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
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
  imageUrl: {
    type: DataTypes.STRING(1000),
    defaultValue:
      "http://www.cranenetworkvle.org/home/images/content/centers/default_thumb.png",
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

  const [
    shanu,
    doop,
    hogwarts,
    assassinationClassroom,
    superheroUniversity,
    avatarUniversity,
  ] = await Promise.all([
    Student.create({
      firstName: "Shanu",
      lastName: "Aloo",
      email: "sarb@hotmail.com",
      gpa: 3.4,
    }),
    Student.create({
      firstName: "Doop",
      lastName: "Derp",
      email: "derpak@gmail.com",
      gpa: 3.2,
    }),
    Campus.create({
      name: "Hogwarts Campus",
      address: "Address for Hogwarts",
      description: "HELLO WELCOME TO HOGWARTS!",
    }),
    Campus.create({
      name: "Assassination Classroom",
      address: "Address for Assassination Classroom",
      description: "HELLO WELCOME TO ASSASSINATION CLASSROOM",
    }),
    Campus.create({
      name: "SuperHero University",
      address: "Address for Superhero University",
      description: "HELLO WELCOME TO SUPERHERO UNIVERSITY",
    }),
    Campus.create({
      name: "Avatar University",
      address: "Address for Avatar University",
      description: "HELLO WELCOME TO AVATAR UNIVERSITY",
    }),
  ]);

  shanu.setCampus(hogwarts);
  // doop.setCampus(assassinationClassroom);
};
//export your db

module.exports = {
  db,
  syncAndSeed,
  Student,
  Campus,
};
