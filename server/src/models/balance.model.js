import mongoose from "mongoose";

const balanceSchema = new mongoose.Schema({
  month: {
    type: Date,
    required: true,
  },
  income: {
    type: Number,
  },
  expenses: {
    type: Number,
  },
});

export default mongoose.model("Balance", balanceSchema);
