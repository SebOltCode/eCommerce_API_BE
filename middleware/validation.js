import Joi from 'joi';

import { createValidator } from 'express-joi-validation';
const validator = createValidator();

export const userSchema = Joi.object({
  name: Joi.string().required().min(3).max(50),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const validateUser = (req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    return validator.body(userSchema)(req, res, next);
  }
  next();
};

export const productSchema = Joi.object({
  name: Joi.string().required().min(3).max(50),
  description: Joi.string().required().min(10).max(500),
  price: Joi.number().required().min(0),
});

export const validateproduct = (req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    return validator.body(productSchema)(req, res, next);
  }
  next();
};

export const categorieSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
});

export const validatecategorie = (req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    return validator.body(categorieSchema)(req, res, next);
  }
  next();
};

export const orderSchema = Joi.object({
  total: Joi.number().required().min(0),
  userId: Joi.number().required(),
});
export const validateorder = (req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    return validator.body(orderSchema)(req, res, next);
  }
  next();
};