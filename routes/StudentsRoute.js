const express = require("express");
const route = express.Router();
const stdValidator = require("../middlewares/StudentValidatorMiddleWare");
const StdController = require("../controllers/StudentController");

route.all("/", (req, res, nxt) => {
    console.log("request recieved on Students collection");
    nxt();
});

route.get("/", StdController.getAllStudents);

route.get("/:id", StdController.getStudentById);

route.post("/", stdValidator, StdController.addNewStudent);

route.delete("/:id", StdController.deleteStudent);

route.put("/:id", StdController.updateStudent);

module.exports = route;