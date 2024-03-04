import Inventory from "../models/inventory.model.js";

export const getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find().populate("product");
    res.json(inventories);
  } catch (error) {
    res.status(500).json({ error: "Inventory error" });
  }
};

export const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id).populate(
      "product"
    );
    if (!inventory)
      return res.status(404).json({ message: "Inventory not found" });
  } catch (error) {
    res.status(500).json({ error: "Inventory error" });
  }
};

export const createInventory = async (req, res) => {
  try {
    const { product, amount } = req.body;
    const newInventory = await new Inventory({ product, amount });
    const savedInventory = newInventory.save();
    res.json(savedInventory);
  } catch (error) {
    res.status(500).json({ error: "Inventory error" });
  }
};

export const deleteInventory = async (req, res) => {
  try {
    const deletedInventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!deletedInventory)
      return res.status(404).json({ message: "Inventory content not found" });
    return res.status(204);
  } catch (error) {
    res.status(500).json({ error: "Inventory error" });
  }
};

export const updateInventory = async (req, res) => {
  try {
    const { product, amount } = req.body;
    const inventoryUpdated = await Inventory.findByIdAndUpdate(
      { _id: req.params.id },
      { product, amount },
      { new: true }
    );
    return res.json(inventoryUpdated);
  } catch (error) {
    res.status(500).json({ error: "Inventory error" });
  }
};
