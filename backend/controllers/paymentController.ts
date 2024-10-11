import Payment from "../models/Payment";
import { Request, Response } from "express";

// Create a new payment
export const createPayment = async (req: Request, res: Response) => {
  try {
    const newPayment = await Payment.create(req.body);
    res.status(201).json(newPayment);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get all payments
export const getAllPayments = async (req: Request, res: Response) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Get one payment by ID
export const getOnePayment = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) return res.status(404).json({ message: "Payment not found" });
    res.status(200).json(payment);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Update a payment by ID
export const updatePayment = async (req: Request, res: Response) => {
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedPayment)
      return res.status(404).json({ message: "Payment not found" });
    res.status(200).json(updatedPayment);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// Delete a payment by ID
export const deletePayment = async (req: Request, res: Response) => {
  try {
    const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
    if (!deletedPayment)
      return res.status(404).json({ message: "Payment not found" });
    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};
