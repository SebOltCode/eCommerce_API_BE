import { Router } from 'express';
import { createValidator } from 'express-joi-validation';
const validator = createValidator(); // Hier wird der Validator erstellt
import { orderSchema } from '../middleware/validation.js';
import {
  createOrder,
  deleteOrder,
  getOrderById,
  getOrder,
  updateOrder,
} from '../controllers/order.js';

const orderRoutes = Router();

orderRoutes.get('/', getOrder);
orderRoutes.post('/', validator.body(orderSchema), createOrder);

orderRoutes.get('/:id', getOrderById);
orderRoutes.put('/:id', validator.body(orderSchema), updateOrder);
orderRoutes.delete('/:id', deleteOrder);

export default orderRoutes;
