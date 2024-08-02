import {Router} from 'express';
import { createOrder, deleteOrder, getOrderById, getOrder, updateOrder } from '../controllers/order.js';

const orderRoutes = Router();

orderRoutes.route('/').get(getOrder).post(createOrder);
orderRoutes.route('/:id').get(getOrderById).put(updateOrder).delete(deleteOrder);

export default orderRoutes;