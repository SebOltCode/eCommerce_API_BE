import express from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/User.js';

const userRoutes = express.Router();

userRoutes.route('/').get(getUsers).post(createUser);
userRoutes.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

export default userRoutes;