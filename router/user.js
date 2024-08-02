import express from 'express';

import { createValidator } from 'express-joi-validation';
const validator = createValidator(); // Hier wird der Validator erstellt
import { userSchema } from '../middleware/validation.js';





import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/User.js';

const userRoutes = express.Router();

userRoutes.route('/').get(getUsers).post(validator.body(userSchema),createUser);
userRoutes.route('/:id').get(getUserById).put(validator.body(userSchema),updateUser).delete(deleteUser);


export default userRoutes;
