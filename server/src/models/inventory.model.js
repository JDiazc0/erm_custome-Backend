import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Inventory", inventorySchema);
