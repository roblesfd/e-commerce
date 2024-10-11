import Cart from "../models/Cart";
import { Request, Response } from "express";

// Create a new cart
export const createCart = async (req: Request, res: Response) => {
  try {
    const newCart = await Cart.create(req.body);
    res.status(201).json(newCart);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get all carts
export const getAllCarts = async (req: Request, res: Response) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get one cart by ID
export const getOneCart = async (req: Request, res: Response) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json(cart);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Update a cart by ID
export const updateCart = async (req: Request, res: Response) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedCart)
      return res.status(404).json({ message: "Cart not found" });
    res.status(200).json(updatedCart);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Delete a cart by ID
export const deleteCart = async (req: Request, res: Response) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id);
    if (!deletedCart)
      return res.status(404).json({ message: "Cart not found" });
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};
