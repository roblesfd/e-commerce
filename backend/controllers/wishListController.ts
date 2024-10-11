import Wishlist from "../models/Wishlist";
import { Request, Response } from "express";

// Create a new wishlist
export const createWishlist = async (req: Request, res: Response) => {
  try {
    const newWishlist = await Wishlist.create(req.body);
    res.status(201).json(newWishlist);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get all wishlists
export const getAllWishlists = async (req: Request, res: Response) => {
  try {
    const wishlists = await Wishlist.find();
    res.status(200).json(wishlists);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get one wishlist by ID
export const getOneWishlist = async (req: Request, res: Response) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id);
    if (!wishlist)
      return res.status(404).json({ message: "Wishlist not found" });
    res.status(200).json(wishlist);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Update a wishlist by ID
export const updateWishlist = async (req: Request, res: Response) => {
  try {
    const updatedWishlist = await Wishlist.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedWishlist)
      return res.status(404).json({ message: "Wishlist not found" });
    res.status(200).json(updatedWishlist);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Delete a wishlist by ID
export const deleteWishlist = async (req: Request, res: Response) => {
  try {
    const deletedWishlist = await Wishlist.findByIdAndDelete(req.params.id);
    if (!deletedWishlist)
      return res.status(404).json({ message: "Wishlist not found" });
    res.status(200).json({ message: "Wishlist deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};
