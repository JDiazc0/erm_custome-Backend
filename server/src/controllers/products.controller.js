import Products from "../models/products.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find().populate("materials.materials");
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Products error" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id).populate(
      "materials"
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ error: "Product error" });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, materials } = req.body;

  try {
    const newProduct = await new Products({
      name,
      price,
      materials,
    });

    const savedProduct = newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Products error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Products error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, price, materials } = req.body;
    const product = await Products.findByIdAndUpdate(
      { _id: req.params.id },
      { name, price, materials },
      { new: true }
    );
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Products error" });
  }
};
