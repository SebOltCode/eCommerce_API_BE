import express from 'express';
import { createValidator } from 'express-joi-validation';
const validator = createValidator(); // Hier wird der Validator erstellt
import { userSchema } from '../middleware/validation.js';

import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from '../controllers/User.js';

const userRoutes = express.Router();

userRoutes.get('/', getUsers);
userRoutes.post('/', validator.body(userSchema), createUser);
userRoutes.get('/:id', getUserById);
userRoutes.put('/:id', validator.body(userSchema), updateUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;
