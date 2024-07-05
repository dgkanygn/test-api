import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Category = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
  },

  description: {
    type: String,
    required: true,
    max: 100,
  },
});

export default mongoose.model("Category", Category);
