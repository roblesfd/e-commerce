import mongoose, { Schema, Types } from "mongoose";

interface IShippingAddress {
  user: {
    type: Types.ObjectId;
    ref: string;
    required: boolean;
  };
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

const ShippingAddressSchema: Schema<IShippingAddress> = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IShippingAddress>(
  "ShippingAddress",
  ShippingAddressSchema
);
