const Joi = require("joi");

const registerValidation = (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      role: Joi.string().required().valid("student", "instructor"),
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;