const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const User = require("../models").user
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

router.post("/register", async (req, res) => {
    const data = req.body;
    const { error } = registerValidation(data);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    let emailExist = await User.findOne({ email: data.email }).exec();
    if (emailExist) {
        return res.status(400).send("email already exist");
    }
    const hashedPassword = bcrypt.hashSync(data.password, saltRounds);
    const newUser = new User({
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role,
    })
    try {
        let savedUser = await newUser.save();
        return res.send({msg: "user is successfully saved", savedUser});
    } catch (e) {
        return res.status(500).send(e);
    }
})

router.post("/login", async (req, res) => {
    const data = req.body;
    const { error } = loginValidation(data);
    if (error) {
        return res.status(400).send(error);
    }
    let loginUser = await User.findOne({ email: data.email }).exec();
    if (!loginUser) {
      return res.status(400).send("user doesn't exist");
    }
    if (!bcrypt.compareSync(data.password, loginUser.password)) {
        return res.status(400).send("password not correct");
    }
    const tokenObject = { _id: loginUser._id, email: loginUser.email };
    const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
    return res.send({ msg: "login success", user: loginUser, token: "JWT "+token });
})

module.exports = router;
