import { Router } from 'express';

import { createValidator } from 'express-joi-validation';
const validator = createValidator(); // Hier wird der Validator erstellt
import { categorieSchema } from '../middleware/validation.js';


import { createCategory, deleteCategory, getCategoryById, getCategory, updateCategory } from '../controllers/category.js';

const categoryRoutes = Router();

categoryRoutes.route('/').get(getCategory).post(validator.body(categorieSchema),createCategory);
categoryRoutes.route('/:id').get(getCategoryById).put(validator.body(categorieSchema),updateCategory).delete(deleteCategory);

export default categoryRoutes;

