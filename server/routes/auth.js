const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const User = require("../models").user
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/register", async (req, res) => {
    const data = req.body;
    const { error } = registerValidation(data);
    if (error) {
        return res.status(400).send(error);
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

module.exports = router;
