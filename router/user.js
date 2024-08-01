import express from 'express';
import {
    createUser,
    deleteUser,
    getUserById,
    getUser,
    updateUser,
} from './controllers/User.js';


const userRoutes = express.Router();

userRoutes.get('/', getUser);
userRoutes.post('/', createUser);
userRoutes.get('/:id', getUserById);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;