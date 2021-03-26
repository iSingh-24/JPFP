const express = require("express");
const path = require("path");
const { syncAndSeed, Student, Campus } = require("./db/db");

//initialize app
const app = express();
//require morgan|volleyball, path packages
//require db from /db

//use morgan|volleyball
//use express.json()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "./public")));
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!

app.get("/", async (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/students", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/campuses", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      include: Student,
    });
    res.send(campuses);
  } catch (ex) {
    next(ex);
  }
});

//require in your routes and use them on your api path

//404 handler

//500 handler

//set PORT
const init = async () => {
  try {
    await syncAndSeed();

    const port = process.env.PORT || 3000;
    //listen

    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
