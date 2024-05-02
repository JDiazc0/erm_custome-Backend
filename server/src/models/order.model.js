import mongoose from "mongoose";
import moment from "moment-timezone";

const productSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  products: [productSchema],
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: () => moment().tz("America/Bogota").toDate(),
  },
});

export default mongoose.model("Order", orderSchema);
