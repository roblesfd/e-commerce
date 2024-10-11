import Category from "../models/Category";
import { Request, Response } from "express";

// Create a new category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get all categories
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get one category by ID
export const getOneCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Update a category by ID
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedCategory)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json(updatedCategory);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Delete a category by ID
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};
