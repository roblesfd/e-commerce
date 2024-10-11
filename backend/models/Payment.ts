import mongoose, { Schema, Types } from "mongoose";

interface IPayment {
  order: {
    type: Types.ObjectId;
    ref: string;
    required: boolean;
  };
  paymentMethod: "credit_card" | "paypal" | "stripe";
  amount: number;
  status: "pending" | "completed" | "failed";
  transactionId: string;
}

const PaymentSchema: Schema<IPayment> = new mongoose.Schema(
  {
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal", "stripe"],
      required: true,
    },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    transactionId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IPayment>("Payment", PaymentSchema);
