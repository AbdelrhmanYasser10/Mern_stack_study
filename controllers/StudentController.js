const Student = require("../models/StudentsModel");

//create
let addNewStudent = (req, res) => {
    let std = new Student({
        fn: req.body.fn,
        ln: req.body.ln,
        department: req.body.dept,
        id: req.body.id,
    });

    std.save().then(() => {
        res.status(200).send(std);
    }).catch((err) => {
        res.status(400).send("Bad Request");
    });
}

//get by Id
let getStudentById = (req, res) => {
    Student.findById(req.params.id).then((std) => {

        if (std) {
            return res.status(200).send(std);
        } else {
            res.status(404).send("Not Found");

        }

    }).catch((err) => {
        console.log(err);
        res.status(400).send("Bad Request");

    });
}

//get All
let getAllStudents = async(req, res) => {

    let std = await Student.find().select({ fn: 1, ln: 1, id: 1 }).sort({ id: 1 });
    res.send(std);
}

//update 
let updateStudent = async(req, res) => {
    let std = Student.findOneAndUpdate(req.params.id, req.body, { returnOriginal: false });
    if (!std) {
        return res.status(404).send("Not Found");

    } else {
        return res.status(200).send(std);
    }
}

//delete
let deleteStudent = async(req, res) => {
    let std = Student.findOneAndRemove(req.params.id);
    if (!std) {
        return res.status(404).send("Not Found");

    } else {
        return res.status(200).send(std);
    }
}
module.exports = { deleteStudent, updateStudent, getAllStudents, getStudentById, addNewStudent }