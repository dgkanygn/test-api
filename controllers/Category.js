import Category from "../models/Category.js";
// import Product from "../models/Category.js";

export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newCategory = await Category.create({
      name,
      description,
    });

    res.status(201).json({ newCategory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({ categories });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    res.status(200).json({ category });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({ updated });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await Category.findByIdAndDelete(id);

    res.status(200).json({ message: "Category was deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
