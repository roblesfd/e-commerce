import mongoose, { Schema, Types } from "mongoose";

interface IProduct {
  name: string;
  description: string;
  price: number;
  images: string[];
  stock: number;
  category: {
    type: Types.ObjectId;
    ref: string;
    required: boolean;
  };
  brand: string;
  rating: number;
  reviews: Types.ObjectId[];
}

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String, required: true }],
    stock: { type: Number, default: 0 },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand: { type: String },
    rating: { type: Number, default: 0 },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);
