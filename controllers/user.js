import User from './models/user.js';
import { returnErrorWithMessage } from '../middleware/returnErrorWithMessage.js';

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return returnErrorWithMessage(res, 400, 'Name, email, and password are required');
        }

        const newUser = await User.create({ name, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        returnErrorWithMessage(res, 500, 'An error occurred creating the user');
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        returnErrorWithMessage(res, 500, 'An error occurred fetching users');
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            res.status(200).json(user);
        } else {
            returnErrorWithMessage(res, 404, 'User not found');
        }
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        returnErrorWithMessage(res, 500, 'An error occurred fetching the user');
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const [updated] = await User.update({ name, email, password }, {
            where: { id }
        });

        if (updated) {
            const updatedUser = await User.findByPk(id);
            res.status(200).json(updatedUser);
        } else {
            returnErrorWithMessage(res, 404, 'User not found');
        }
    } catch (error) {
        console.error('Error updating user:', error);
        returnErrorWithMessage(res, 500, 'An error occurred updating the user');
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(200).json({ message: 'User deleted' });
        } else {
            returnErrorWithMessage(res, 404, 'User not found');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        returnErrorWithMessage(res, 500, 'An error occurred deleting the user');
    }
};