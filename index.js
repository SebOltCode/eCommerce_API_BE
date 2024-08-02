import express from 'express';
import 'dotenv/config';
import pg from 'pg';

import userRoutes from './router/user.js';
import orderRoutes from './router/order.js';
import productRoutes from './router/product.js';
import categoryRoutes from './router/category.js';

/* import { createValidator } from 'express-joi-validation';
import {
  userSchema,
  productSchema,
  categorieSchema,
  orderSchema,
} from './middleware/validation.js';
const validator = createValidator(); // Hier wird der Validator erstellt */

const { Client } = pg;

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
