import Joi from "joi";

export const signupValidation = (data) => {
  const userSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  return userSchema.validateAsync(data);
};

export const loginValidation = (data) => {
  const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  return userSchema.validateAsync(data);
};
