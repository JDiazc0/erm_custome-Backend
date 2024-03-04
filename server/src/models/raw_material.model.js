import mongoose from "mongoose";

const raw_materialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
});

export default mongoose.model("Raw_Material", raw_materialSchema);
