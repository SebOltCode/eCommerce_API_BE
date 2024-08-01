import Joi from 'joi';

export const userSchema = Joi.object({
    name: Joi.string().required().min(3).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});