import Product from "../models/Product.js";
// import Category from "../models/Category.js";

export const createProduct = async (req, res) => {
  try {
    const { name, category, price } = req.body;

    const newProduct = await Product.create({
      name,
      category,
      price,
    });

    res.status(201).json({ newProduct });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({ updated });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: "product was deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
