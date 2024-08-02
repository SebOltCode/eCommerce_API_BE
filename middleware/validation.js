import Joi from 'joi';

export const userSchema = Joi.object({
  name: Joi.string().required().min(3).max(50),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const productSchema = Joi.object({
  name: Joi.string().required().min(3).max(50),
  description: Joi.string().required().min(10).max(500),
  price: Joi.number().required().min(0),
});

export const categorieSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
});

export const orderSchema = Joi.object({
  total: Joi.number().required().min(0),
  userId: Joi.number().required(),
});
