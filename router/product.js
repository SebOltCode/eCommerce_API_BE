import { Router } from 'express';
import { createValidator } from 'express-joi-validation';
const validator = createValidator(); // Hier wird der Validator erstellt
import { productSchema } from '../middleware/validation.js';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProduct,
  updateProduct,
} from '../controllers/product.js';

const productRoutes = Router();

productRoutes.get('/', getProduct);
productRoutes.post('/', validator.body(productSchema), createProduct);

productRoutes.get('/:id', getProductById);
productRoutes.put('/:id', validator.body(productSchema), updateProduct);
productRoutes.delete('/:id', deleteProduct);

export default productRoutes;
