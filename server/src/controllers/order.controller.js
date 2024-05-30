import Order from "../models/order.model.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("client").populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Orders error" });
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("client").populate("products.product");
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order); 
  } catch (error) {
    res.status(500).json({ error: "Orders error" });
  }
};

export const createOrder = async (req, res) => {
  const { client, products, price } = req.body;
  try {
    const newOrder = new Order({
      client,
      products,
      price,
    });
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: "Orders error" });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ message: "Order not found" });
    res.status(204).json(); 
  } catch (error) {
    res.status(500).json({ error: "Orders error" });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { client, products, price } = req.body;
    const orderUpdate = await Order.findByIdAndUpdate(
      req.params.id,
      { client, products, price },
      { new: true }
    ).populate("client").populate("products.product"); 
    if (!orderUpdate) return res.status(404).json({ message: "Order not found" });
    return res.json(orderUpdate);
  } catch (error) {
    res.status(500).json({ error: "Orders error" });
  }
};
