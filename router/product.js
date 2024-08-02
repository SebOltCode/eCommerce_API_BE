
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

productRoutes.route('/').get(getProduct).post(validator.body(productSchema),createProduct);
productRoutes.route('/:id').get(getProductById).put(validator.body(productSchema),updateProduct).delete(deleteProduct);


export default productRoutes;
