import {Router} from 'express';
import { createProduct, deleteProduct, getProductById, getProduct, updateProduct } from '../controllers/product.js';

const productRoutes = Router();

productRoutes.route('/').get(getProduct).post(createProduct);
productRoutes.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

export default productRoutes;