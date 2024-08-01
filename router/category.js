import { Router } from 'express';
import {
    createCategory,
    deleteCategory,
    getCategoryById,
    // getCategory,
    updateCategory,
} from '../controllers/category.js';

const categoryRoutes = Router();

categoryRoutes.get('/', getCategory);
categoryRoutes.post('/', createCategory);

categoryRoutes.get('/:id', getCategoryById);
categoryRoutes.put('/:id', updateCategory);
categoryRoutes.delete('/:id', deleteCategory);

export default categoryRoutes;