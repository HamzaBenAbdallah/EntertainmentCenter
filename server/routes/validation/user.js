import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const complexityOptions = {
  min: 8,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 6,
};

export const signupValidation = (data) => {
  const userSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required().label("First name"),
    lastName: Joi.string().min(2).max(30).required().label("Last name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity(complexityOptions)
      .required()
      .label("Password"),
  });

  return userSchema.validateAsync(data);
};

export const loginValidation = (data) => {
  const userSchema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });

  return userSchema.validateAsync(data);
};
