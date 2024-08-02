import { Router } from 'express';
import { createCategory, deleteCategory, getCategoryById, getCategory, updateCategory } from '../controllers/category.js';

const categoryRoutes = Router();

categoryRoutes.route('/').get(getCategory).post(createCategory);
categoryRoutes.route('/:id').get(getCategoryById).put(updateCategory).delete(deleteCategory);

export default categoryRoutes;