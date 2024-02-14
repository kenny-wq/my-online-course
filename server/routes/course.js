const router = require("express").Router();
const Course = require("../models").course;
const jwt = require("jsonwebtoken");
const courseValidation = require("../validation").courseValidation;

router.post("/add_course", async (req, res) => {
    const data = req.body;
    let {error} = courseValidation(data);
    if (error) {
        return res.status(400).send({msg:"format error",error});
    }
    if (req.user.role === "student") {
        return res.status(400).send("only instructor can pulish a course");
    }
    let newCourse = new Course({
        title: data.title,
        description: data.description,
        price: data.price,
        instructor: req.user._id,
    });
    let savedCourse = await newCourse.save();

    return res.send({msg:"course saved successfully",savedCourse});
})

router.post("/enroll_course/:_id", async (req, res) => {
    const { _id } = req.params;
    if (req.user.role === "instructor") {
        return res.status(400).send("only student can enroll a course");
    }
    let foundCourse = await Course.findOne({ _id }).exec();
    if (!foundCourse.students.includes(req.user._id)) { // if user not include
        foundCourse.students.push(req.user._id); // push user in
        let savedCourse = await foundCourse.save();
        return res.send({ msg: "course enroll successfully", savedCourse });
    }
    else {
        return res.send({ msg: "user already enroll"});
    }
    
})

router.get("/search_course/:courseName", async (req, res) => {
    let courseName = req.params.courseName;
    let foundCourse = await Course.findOne({ title: courseName }).populate("instructor",["name","email"]).exec();
    if (foundCourse !== null) {
        return res.send({ msg: "course found", foundCourse });
    }
    return res.send({ msg: "course not found", foundCourse: null });
})

module.exports = router;