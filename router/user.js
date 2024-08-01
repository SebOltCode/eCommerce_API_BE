import express from 'express';
import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser,

} from '../controllers/User.js';


const userRoutes = express.Router();

userRoutes.get('/', getUsers);
userRoutes.post('/', createUser);
userRoutes.get('/:id', getUserById);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;