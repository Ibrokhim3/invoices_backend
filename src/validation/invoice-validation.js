const Joi = require("joi");

module.exports = (data) => {
  const schema = Joi.object({
    userId: Joi.string(),
    to: Joi.string().min(3).max(50).required(),
    createdDate: Joi.date().required(),
    email: Joi.string().required(),
    dueDate: Joi.date().required(),
    term: Joi.number().required(),
    description: Joi.string().allow(""),
    price: Joi.number().min(100).max(10000).required(),
  });

  return schema.validate(data);
};
