const mongoose = require("mongoose");


const studentsSchema = new mongoose.Schema({
    fn: {
        type: String,
        require: true,
    },
    ln: {
        type: String,
        require: true,
    },
    id: {
        type: Number,
        unique: true,
        require: true,

    },
    department: {
        type: String,
        require: true,
        enum: ["CS", "SC", "Csys", "IS"],
        validate: {
            validator: (v) => {
                return (/^[CS][sCS]$/.test(v));
            }
        },
    },
});

const Student = mongoose.model("Students", studentsSchema);

module.exports = Student;