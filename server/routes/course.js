const router = require("express").Router();
const Course = require("../models").course;
const jwt = require("jsonwebtoken");
const courseValidation = require("../validation").courseValidation;

router.post("/add_course", async (req, res) => {
    const data = req.body;
    let {error} = courseValidation(data);
    if (error) {
        return res.status(400).send({"msg":"format error",error});
    }
    if (req.user.role === "student") {
        return res.status(400).send("only instructor can pulish a course");
    }
    console.log(req.user);
    let newCourse = new Course({
        title: data.title,
        description: data.description,
        price: data.price,
        instructor: req.user._id,
    });
    let savedCourse = await newCourse.save();

    return res.send({"msg":"course saved successfully",savedCourse});
})

module.exports = router;