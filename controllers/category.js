import Category from '../models/category.js';

// Getting all categories
export const getCategory = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Creating a new category
export const createCategory = async (req, res) => {
  try {
    const {
      body: { name },
    } = req;
    if (!name) return res.status(400).json({ error: 'Name is required' });
    const category = await Category.create(req.body);
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get category by id
export const getCategoryById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update category by id
export const updateCategory = async (req, res) => {
  try {
    const {
      body: { firstName, lastName, email },
      params: { id },
    } = req;
    if (!firstName || !lastName || !email)
      return res.status(400).json({ error: 'Name is required' });
    const catagory = await Category.findByPk(id);
    if (!catagory) return res.status(404).json({ error: 'Category not found' });
    await catagory.update(req.body);
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Delete category by id
export const deleteCategory = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const category = await Category.findByPl(id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    await category.destroy();
    res.json({ message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
