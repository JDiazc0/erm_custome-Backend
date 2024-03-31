import mongoose from "mongoose";

const materialsSchema = new mongoose.Schema({
  material: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Raw_Material",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  materials: [materialsSchema],
});

export default mongoose.model("Product", productsSchema);
