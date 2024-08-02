
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


orderRoutes.route('/').get(getOrder).post(validator.body(orderSchema),createOrder);
orderRoutes.route('/:id').get(getOrderById).put(validator.body(orderSchema),updateOrder).delete(deleteOrder);


export default orderRoutes;
