import mongoose, { Schema, Types } from "mongoose";

interface IOrder {
  user: {
    type: Types.ObjectId;
    ref: string;
    required: boolean;
  };
  products: { product: Types.ObjectId; quantity: number }[];
  totalPrice: number;
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  paymentMethod: "credit_card" | "paypal" | "stripe";
  deliveryDate: Date | string;
}

const OrderSchema: Schema<IOrder> = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal", "stripe"],
      required: true,
    },
    deliveryDate: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>("Order", OrderSchema);
