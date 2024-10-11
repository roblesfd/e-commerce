import Review from "../models/Review";
import { Request, Response } from "express";

// Create a new review
export const createReview = async (req: Request, res: Response) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get all reviews
export const getAllReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get one review by ID
export const getOneReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json(review);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Update a review by ID
export const updateReview = async (req: Request, res: Response) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedReview)
      return res.status(404).json({ message: "Review not found" });
    res.status(200).json(updatedReview);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Delete a review by ID
export const deleteReview = async (req: Request, res: Response) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview)
      return res.status(404).json({ message: "Review not found" });
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};
