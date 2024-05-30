import mongoose from "mongoose";
import moment from "moment-timezone";

const productSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,  
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,  
  },
});

const orderSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true, 
  },
  products: {
    type: [productSchema],
    validate: [arrayLimit, '{PATH} debe tener al menos un producto']  
  },
  price: {
    type: Number,
    required: true,
    min: 0,  
  },
  date: {
    type: Date,
    default: () => moment().tz("America/Bogota").toDate(),
  },
});

function arrayLimit(val) {
  return val.length > 0;
}

export default mongoose.model("Order", orderSchema);
