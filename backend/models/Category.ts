import mongoose, { Schema, Types } from "mongoose";

interface ICategory {
  name: string;
  description: string;
  products: Types.ObjectId[];
}

const CategorySchema: Schema<ICategory> = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

export default mongoose.model<ICategory>("Category", CategorySchema);
