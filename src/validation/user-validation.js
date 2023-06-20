const Joi = require("joi");

exports.signupValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().min(5).max(30).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,15}$"))
      .required(),
  });

  return schema.validate(data);
};
