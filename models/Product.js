import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Product = new Schema({
  name: {
    type: String,
    required: true,
    max: 56,
  },

  category: {
    type: String,
    max: 70,
  },

  price: {
    type: String,
    required: true,
    max: 500,
  },
});

export default mongoose.model("Product", Product);
