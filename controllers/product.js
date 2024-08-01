import Product from '../models/Product.js';
import { returnErrorWithMessage } from '../middleware/returnErrorWithMessage.js';

// Creating a new product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body; // Vergewissere dich, dass alle benötigten Felder vorhanden sind
    if (!name || !description || !price) {
      return returnErrorWithMessage(res, 400, 'Name, description, and price are required');
    }
    const newProduct = await Product.create({ name, description, price });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating Product:', error);
    returnErrorWithMessage(res, 500, 'An error occurred creating the Product');
  }
};

// Getting all products
export const getProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    returnErrorWithMessage(res, 500, 'An error occurred fetching products');
  }
};

// Get product by id
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (product) {
      res.status(200).json(product);
    } else {
      returnErrorWithMessage(res, 404, 'Product not found');
    }
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    returnErrorWithMessage(res, 500, 'An error occurred fetching the product');
  }
};

// Update product by id
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body; // Sicherstellen, dass diese Felder definiert sind

    const [updated] = await Product.update(
      { name, description, price },
      {
        where: { id },
      }
    );

    if (updated) {
      const updatedProduct = await Product.findByPk(id);
      res.status(200).json(updatedProduct);
    } else {
      returnErrorWithMessage(res, 404, 'Product not found');
    }
  } catch (error) {
    console.error('Error updating product:', error);
    returnErrorWithMessage(res, 500, 'An error occurred updating the product');
  }
};

// Delete product by id
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({
      where: { id },
    });

    if (deleted) {
      res.status(200).json({ message: 'Product deleted' });
    } else {
      returnErrorWithMessage(res, 404, 'Product not found');
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    returnErrorWithMessage(res, 500, 'An error occurred deleting the product');
  }
};
