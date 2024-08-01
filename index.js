import express from 'express';
import 'dotenv/config';
import pg from 'pg';

import userRoutes from './router/user.js';
import orderRoutes from './router/order.js';
import productRoutes from './router/product.js';
import categoryRoutes from './router/category.js';

import { createValidator } from 'express-joi-validation';
import {
  userSchema,
  productSchema,
  categorieSchema,
  orderSchema
} from './middleware/validation.js';

const { Client } = pg;

const app = express();
const port = process.env.PORT || 3000;

const validator = createValidator(); // Hier wird der Validator erstellt

app.use(express.json());

app.use('/users', validator.body(userSchema), userRoutes);
app.use('/products', validator.body(productSchema), productRoutes);
app.use('/categories', validator.body(categorieSchema), categoryRoutes);
app.use('/orders', validator.body(orderSchema), orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
