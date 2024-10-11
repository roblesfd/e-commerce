import mongoose, { Schema, Types } from "mongoose";

interface IReview {
  user: { type: Types.ObjectId; ref: string; required: boolean };
  product: {
    type: Types.ObjectId;
    ref: string;
    required: boolean;
  };
  rating: number;
  comment: string;
}

const ReviewSchema: Schema<IReview> = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IReview>("Review", ReviewSchema);
