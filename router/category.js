import { Router } from 'express';
import { createValidator } from 'express-joi-validation';
const validator = createValidator(); // Hier wird der Validator erstellt
import { categorieSchema } from '../middleware/validation.js';
import {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategory,
  updateCategory,
} from '../controllers/category.js';

const categoryRoutes = Router();

categoryRoutes.get('/', getCategory);
categoryRoutes.post('/', validator.body(categorieSchema), createCategory);

categoryRoutes.get('/:id', getCategoryById);
categoryRoutes.put('/:id', validator.body(categorieSchema), updateCategory);
categoryRoutes.delete('/:id', deleteCategory);

export default categoryRoutes;
