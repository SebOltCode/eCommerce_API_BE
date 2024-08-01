import express from 'express';
import 'dotenv/config';
import pg from 'pg';

import userRoutes from './router/user.js';
import orderRoutes from './router/order.js';
import productRoutes from './router/product.js';
import categoryRoutes from './router/category.js';

import { createValidator } from 'express-joi-validation';
import { userSchema } from './middleware/validation.js';

const { Client } = pg;

const app = express();
const port = process.env.PORT || 3000;

const validator = createValidator(); // Hier wird der Validator erstellt

app.use(express.json());

app.use('/categories', categoryRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/users', validator.body(userSchema), userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
