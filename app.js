const mongoose = require("mongoose");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const path = require("path");
const express = require("express");
const stdRouter = require("./routes/StudentsRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(helmet());
app.use(cookieParser());
app.use("/api/students", stdRouter);

mongoose.connect("mongodb+srv://<username>:<password>@<projectname>", {
    //usecreateindex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connected");
}).catch((error) => {
    console.log("error occured", error);
});


app.listen(80, (req, res) => {});