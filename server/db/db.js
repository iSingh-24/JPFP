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
    aang,
    katara,
    aapa,
    zuko,
    harry,
    hermoine,
    tom,
    ron,
    eren,
    mikasa,
    historia,
    armin,
    nagisa,
    karma,
    tadaomi,
    koro,
    hogwarts,
    assassinationClassroom,
    aotUniversity,
    avatarUniversity,
  ] = await Promise.all([
    Student.create({
      firstName: "Avatar",
      lastName: "Aang",
      email: "avatarAang100@hotmail.com",
      gpa: 2.0,
      imageUrl:
        "https://ih1.redbubble.net/image.1413020588.9210/poster,840x830,f8f8f8-pad,1000x1000,f8f8f8.jpg",
    }),
    Student.create({
      firstName: "Katara",
      lastName: "Kaur",
      email: "watertribe@hotmail.com",
      gpa: 3.6,
      imageUrl:
        "http://oyster.ignimgs.com/mediawiki/apis.ign.com/avatar-the-last-airbender/2/25/Katara_img.jpg",
    }),
    Student.create({
      firstName: "Aapa",
      lastName: "Bison",
      email: "ByeSon@gmail.com",
      gpa: 1.0,
      imageUrl:
        "https://i.pinimg.com/originals/8e/01/aa/8e01aa39dfe6468f2dd5d4523cdfc208.jpg",
    }),
    Student.create({
      firstName: "Prince",
      lastName: "Zuko",
      email: "firelordzuko@yahoo.com",
      gpa: 3.2,
      imageUrl:
        "https://static.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest?cb=20180630112142",
    }),
    Student.create({
      firstName: "Harry",
      lastName: "Potter",
      email: "TheBoyWhoLives@gmail.com",
      gpa: 2.9,
      imageUrl:
        "https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg",
    }),
    Student.create({
      firstName: "Hermoine",
      lastName: "Granger",
      email: "MugglesRule@gmail.com",
      gpa: 3.9,
      imageUrl:
        "https://i.pinimg.com/originals/fa/87/7b/fa877bbf328b95b62f236ee19fa796cd.jpg",
    }),
    Student.create({
      firstName: "Tom",
      lastName: "Riddle",
      email: "HeWhoMustNotBeNamed@gmail.com",
      gpa: 3.6,
      imageUrl:
        "https://1.bp.blogspot.com/-5ODQ7TOe73k/XqtUkNToMBI/AAAAAAAAORA/Iy_wZE6U4B4gQhjQOBwkp_nSUw9MiHN2gCLcBGAsYHQ/s1600/Tom%2BRiddle%2B%2528I%2529.jpg",
    }),
    Student.create({
      firstName: "Ron",
      lastName: "Weasley",
      email: "HarrysBestFriend@gmail.com",
      gpa: 3.8,
      imageUrl:
        "https://i.pinimg.com/736x/00/06/d3/0006d30f91e58f1644e5c7b8a24e4762.jpg",
    }),
    Student.create({
      firstName: "Eren",
      lastName: "Yeagar",
      email: "iLoveTitans@gmail.com",
      gpa: 3.0,
      imageUrl:
        "https://i1.sndcdn.com/avatars-l3f4huVHb5sRi2Fg-QAfNDg-t500x500.jpg",
    }),
    Student.create({
      firstName: "Mikasa",
      lastName: "Ackerman",
      email: "iLoveEren@gmail.com",
      gpa: 3.3,
      imageUrl:
        "https://static.wikia.nocookie.net/slap-on-titan5669/images/c/cf/Mikasa.png/revision/latest/top-crop/width/360/height/450?cb=20161213102353",
    }),
    Student.create({
      firstName: "Historia",
      lastName: "Reiss",
      email: "historyRepeats@gmail.com",
      gpa: 3.5,
      imageUrl: "https://i.imgur.com/Nfvvu7U.jpg",
    }),
    Student.create({
      firstName: "Armin",
      lastName: "Arlert",
      email: "cryBaby101@gmail.com",
      gpa: 3.8,
      imageUrl: "https://cdn.staticneo.com/w/attackontitan/ArminArlert.jpg",
    }),
    Student.create({
      firstName: "Nagisa",
      lastName: "Shiota",
      email: "nshiota@hotmail.com",
      gpa: 4.0,
      imageUrl:
        "https://static.wikia.nocookie.net/kndthegamewizardsaga/images/4/49/Nagisa_Shiota.jpg/revision/latest/scale-to-width-down/340?cb=20160718090242",
    }),
    Student.create({
      firstName: "Karma",
      lastName: "Akabane",
      email: "bruteForce@gmail.com",
      gpa: 3.8,
      imageUrl:
        "https://64.media.tumblr.com/477deb5d4a1527627ef1b4569198d6d6/tumblr_ouoockryCf1vy2tgqo3_250.jpg",
    }),
    Student.create({
      firstName: "Tadaomi",
      lastName: "Karasuma",
      email: "assasinationClassroomTeacher@gmail.com",
      gpa: 3.2,
      imageUrl:
        "https://i.pinimg.com/originals/2c/bc/87/2cbc8718aa739df62038e85d5ddf7158.png",
    }),
    Student.create({
      firstName: "Koro",
      lastName: "Sensei",
      email: "NiceAlien@gmail.com",
      gpa: 3.9,
      imageUrl:
        "http://pm1.narvii.com/6677/404543b79b15c7e70d2a5a39531bddc5ae9b0a97_00.jpg",
    }),
    Campus.create({
      name: "Hogwarts Campus",
      address: "Address for Hogwarts",
      description: "HELLO WELCOME TO HOGWARTS!",
      imageUrl:
        "https://static.wikia.nocookie.net/harrypotter/images/0/04/Hogwarts.jpg/revision/latest/scale-to-width-down/340?cb=20080813002811",
    }),
    Campus.create({
      name: "Assassination Classroom",
      address: "Address for Assassination Classroom",
      description: "HELLO WELCOME TO ASSASSINATION CLASSROOM",
      imageUrl:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bcb5dc9e-a9e7-4d79-b1b3-5580f13427fa/ddbkig1-32afb3d3-c878-4bcb-9898-502a525e2cc1.png/v1/fill/w_1280,h_640,q_80,strp/class_3_e_by_shrineheart_ddbkig1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NDAiLCJwYXRoIjoiXC9mXC9iY2I1ZGM5ZS1hOWU3LTRkNzktYjFiMy01NTgwZjEzNDI3ZmFcL2RkYmtpZzEtMzJhZmIzZDMtYzg3OC00YmNiLTk4OTgtNTAyYTUyNWUyY2MxLnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0._RMeuSPd37od4b4-hNXYTXBjE5JUUuPXcni7XXVUpcM",
    }),
    Campus.create({
      name: "AOT University",
      address: "Address for AOT University",
      description: "HELLO WELCOME TO AOT UNIVERSITY",
      imageUrl: "https://cdn.animeuknews.net/app/uploads/2017/06/3.png",
    }),
    Campus.create({
      name: "Avatar University",
      address: "Address for Avatar University",
      description: "HELLO WELCOME TO AVATAR UNIVERSITY",
      imageUrl: "https://i.redd.it/7s12oslabq551.jpg",
    }),
  ]);

  aang.setCampus(avatarUniversity);
  katara.setCampus(avatarUniversity);
  aapa.setCampus(avatarUniversity);
  zuko.setCampus(avatarUniversity);
  harry.setCampus(hogwarts);
  hermoine.setCampus(hogwarts);
  tom.setCampus(hogwarts);
  ron.setCampus(hogwarts);
  eren.setCampus(aotUniversity);
  mikasa.setCampus(aotUniversity);
  historia.setCampus(aotUniversity);
  armin.setCampus(aotUniversity);
  nagisa.setCampus(assassinationClassroom);
  karma.setCampus(assassinationClassroom);
  tadaomi.setCampus(assassinationClassroom);
  koro.setCampus(assassinationClassroom);
};
//export your db

module.exports = {
  db,
  syncAndSeed,
  Student,
  Campus,
};
