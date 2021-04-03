const { default: axios } = require("axios");
const express = require("express");
const path = require("path");
const { syncAndSeed, Student, Campus } = require("./db/db");

const app = express();

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

app.get("/api/campuses/:id", async (req, res, next) => {
  try {
    // const campus = await Campus.findByPk(req.params.id);
    const campus = await Campus.findOne({
      where: {
        id: req.params.id,
      },
      include: [Student],
    });
    res.send(campus);
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/students/:id", async (req, res, next) => {
  try {
    // const student = await Student.findByPk(req.params.id);
    const student = await Student.findOne({
      where: {
        id: req.params.id,
      },
      include: [Campus],
    });
    res.send(student);
  } catch (ex) {
    next(ex);
  }
});

app.post("/api/campuses", async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.send(newCampus);
  } catch (ex) {
    next(ex);
  }
});

app.post("/api/students", async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.send(newStudent);
  } catch (ex) {
    next(ex);
  }
});

app.delete("/api/campuses/:id", async (req, res, next) => {
  try {
    const removeCampus = await Campus.findByPk(req.params.id);
    await removeCampus.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});

app.delete("/api/students/:id", async (req, res, next) => {
  try {
    const removeStudent = await Student.findByPk(req.params.id);
    await removeStudent.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});

app.put("/api/students/:id", async (req, res, next) => {
  try {
    const newStudent = await Student.update(req.body, {
      where: { id: req.params.id },
    });

    res.send(newStudent);
  } catch (ex) {
    next(ex);
  }
});

app.put("/api/campuses/:id", async (req, res, next) => {
  try {
    const newCampus = await Campus.update(req.body, {
      where: { id: req.params.id },
    });
    res.send(newCampus);
  } catch (ex) {
    next(ex);
  }
});

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
