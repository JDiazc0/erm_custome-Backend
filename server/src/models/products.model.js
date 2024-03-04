import mongoose from "mongoose";

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
  materials: [
    {
      materials: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Raw_Material",
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

export default mongoose.model("Product", productsSchema);
