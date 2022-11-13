const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

const joiRegisterSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().trim().required(),
  password: Joi.string().required(),
});

const joiUpdateSubscription = Joi.object({
  subscription: Joi.string()
    .trim()
    .valid("starter", "pro", "business")
    .required(),
});

module.exports = {
  User,
  joiRegisterSchema,
  joiUpdateSubscription,
  joiLoginSchema,
};
