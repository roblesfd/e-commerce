import ShippingAddress from "../models/ShippingAddress";
import { Request, Response } from "express";

// Create a new shipping address
export const createShippingAddress = async (req: Request, res: Response) => {
  try {
    const newShippingAddress = await ShippingAddress.create(req.body);
    res.status(201).json(newShippingAddress);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get all shipping addresses
export const getAllShippingAddresses = async (req: Request, res: Response) => {
  try {
    const shippingAddresses = await ShippingAddress.find();
    res.status(200).json(shippingAddresses);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get one shipping address by ID
export const getOneShippingAddress = async (req: Request, res: Response) => {
  try {
    const shippingAddress = await ShippingAddress.findById(req.params.id);
    if (!shippingAddress)
      return res.status(404).json({ message: "Shipping address not found" });
    res.status(200).json(shippingAddress);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Update a shipping address by ID
export const updateShippingAddress = async (req: Request, res: Response) => {
  try {
    const updatedShippingAddress = await ShippingAddress.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedShippingAddress)
      return res.status(404).json({ message: "Shipping address not found" });
    res.status(200).json(updatedShippingAddress);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Delete a shipping address by ID
export const deleteShippingAddress = async (req: Request, res: Response) => {
  try {
    const deletedShippingAddress = await ShippingAddress.findByIdAndDelete(
      req.params.id
    );
    if (!deletedShippingAddress)
      return res.status(404).json({ message: "Shipping address not found" });
    res.status(200).json({ message: "Shipping address deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};
