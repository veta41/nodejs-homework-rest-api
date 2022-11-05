const Joi = require("joi");

const contactSchemaValidation = Joi.object({
  name: Joi.string().min(2).alphanum().required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.number().integer().required(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { contactSchemaValidation, updateFavoriteSchema };
