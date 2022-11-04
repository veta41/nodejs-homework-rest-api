const Joi = require("joi");

const conactSchema = Joi.object({
  name: Joi.string().min(2).alphanum().required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.number().integer().required(),
});

module.exports = conactSchema;
