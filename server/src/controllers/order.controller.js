import Order from "../models/order.model.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("client");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Orders error" });
  }
};


export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("products");
    if (!order) return res.status(404).json({ message: "Order not found" });
  } catch (error) {
    res.status(500).json({ error: "Orders error" });
  }
};

export const createOrder = async (req, res) => {
  const { client, products, price } = req.body;
  try {
    const newOrder = await new Order({
      client,
      products,
      price,
    });
    const savedOrder = newOrder.save();
    res.json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: "Orders error" });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder)
      return res.status(404).json({ message: "Client not found" });

    return res.status(204);
  } catch (error) {
    res.status(500).json({ error: "Orders error" });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { client, products, price } = req.body;
    const orderUpdate = await Order.findByIdAndUpdate(
      { _id: req.params.id },
      { client, products, price },
      { new: true }
    );
    return res.json(orderUpdate);
  } catch (error) {
    res.status(500).json({ error: "Orders error" });
  }
};
