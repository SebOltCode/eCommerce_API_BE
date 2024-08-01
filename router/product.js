import {Router} from 'express';
import {
    createProduct,
    deleteProduct,
    getProductById,
    getProduct,
    updateProduct,
} from '../controllers/product.js';

const productRoutes = Router();

productRoutes.get('/', getProduct);
productRoutes.post('/', createProduct);

productRoutes.get('/:id', getProductById);
productRoutes.put('/:id', updateProduct);
productRoutes.delete('/:id', deleteProduct);

export default productRoutes;