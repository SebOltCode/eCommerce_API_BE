import express from 'express';
import 'dotenv/config';
import pg from 'pg';

import userRoutes from './router/user.js';
import orderRoutes from './router/order.js';
import productRoutes from './router/product.js';
import categoryRoutes from './router/category.js';


import {
  validateUser,
  validatecategorie,
  validateorder,
  validateproduct,
} from './middleware/validation.js';



const { Client } = pg;

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', validateUser, userRoutes);
app.use('/products', validateproduct, productRoutes);
app.use('/categories', validatecategorie, categoryRoutes);
app.use('/orders', validateorder, orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
