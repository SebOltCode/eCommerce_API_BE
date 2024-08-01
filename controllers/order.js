import Order from '../models/order.js';

// Getting all orders
export const getOrder = async (req, res) => {
  try {
    const orders = await Order.findAll(); // Korrigiert von order auf Order
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Creating a new order
export const createOrder = async (req, res) => {
  try {
    const { userId, total } = req.body; // Angenommene Felder für Order
    if (!userId || total === undefined) return res.status(400).json({ error: 'userId and total are required' });
    const order = await Order.create(req.body);
    res.status(201).json(order); // Statuscode 201 für erstellte Ressourcen
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get order by id
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update order by id
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, total } = req.body; // Angenommene Felder für Order
    if (!userId || total === undefined) return res.status(400).json({ error: 'userId and total are required' });
    
    const order = await Order.findByPk(id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    
    await order.update(req.body);
    res.json(order); // Korrigiert von Order auf order
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete order by id
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id); // Korrigiert von findByPl auf findByPk
    if (!order) return res.status(404).json({ error: 'Order not found' });
    
    await order.destroy();
    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
