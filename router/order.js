import {Router} from 'express';
import {
    createOrder,
    deleteOrder,
    getOrderById,
    getOrder,
    updateOrder,
} from '../controllers/order.js';

const orderRoutes = Router();

orderRoutes.get('/', getOrder);
orderRoutes.post('/', createOrder);

orderRoutes.get('/:id', getOrderById);
orderRoutes.put('/:id', updateOrder);
orderRoutes.delete('/:id', deleteOrder);

export default orderRoutes;