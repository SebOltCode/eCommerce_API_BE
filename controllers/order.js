import Order from '../models/order.js';

// Getting all orders
export const getOrder = async (req, res) => {
  try {
    const orders = await order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Creating a new order
export const createOrder = async (req, res) => {
  try {
    const {
      body: { name },
    } = req;
    if (!name) return res.status(400).json({ error: 'Name is required' });
    const order = await order.create(req.body);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get order by id
export const getOrderById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const order = await order.findByPk(id);
    if (!order) return res.status(404).json({ error: 'order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update order by id
export const updateOrder = async (req, res) => {
  try {
    const {
      body: { firstName, lastName, email },
      params: { id },
    } = req;
    if (!firstName || !lastName || !email)
      return res.status(400).json({ error: 'Name is required' });
    const catagory = await order.findByPk(id);
    if (!catagory) return res.status(404).json({ error: 'order not found' });
    await catagory.update(req.body);
    res.json(Order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Delete order by id
export const deleteOrder = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const order = await order.findByPl(id);
    if (!order) return res.status(404).json({ error: 'order not found' });
    await order.destroy();
    res.json({ message: 'order deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
