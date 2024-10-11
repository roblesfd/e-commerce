import mongoose, { Schema, Types } from "mongoose";

interface ICart {
  user: {
    type: Types.ObjectId;
    ref: string;
    required: boolean;
  };
  items: { product: Types.ObjectId; quantity: number }[];
  totalPrice: number;
}

const CartSchema: Schema<ICart> = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [
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
  },
  { timestamps: true }
);

export default mongoose.model<ICart>("Cart", CartSchema);
