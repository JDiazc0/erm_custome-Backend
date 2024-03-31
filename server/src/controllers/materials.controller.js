import Raw_Material from "../models/raw_material.model.js";

export const getMaterials = async (req, res) => {
  try {
    const Materials = await Raw_Material.find();
    res.json(Materials);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createMaterial = async (req, res) => {
  const { name, cost, weight } = req.body;

  try {
    const newMaterial = await new Raw_Material({
      name,
      cost,
      weight,
    });

    const savedMaterial = newMaterial.save();
    res.json(savedMaterial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMaterial = async (req, res) => {
  try {
    const Material = await Raw_Material.findByIdAndDelete(req.params.id);
    if (!Material)
      return res.status(404).json({ message: "Material not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMaterial = async (req, res) => {
  try {
    const { name, cost, weight } = req.body;
    const updateMaterial = await Raw_Material.findByIdAndUpdate(
      { _id: req.params.id },
      { name, cost, weight },
      { new: true }
    );
    if (!updateMaterial)
      return res.status(404).json({ message: "Material not found" });
    res.json(updateMaterial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
