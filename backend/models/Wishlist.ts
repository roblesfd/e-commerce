import mongoose, { Schema, Types } from "mongoose";

interface IWishlist {
  user: {
    type: Types.ObjectId;
    ref: string;
    required: boolean;
  };
  products: Types.ObjectId[];
}

const WishlistSchema: Schema<IWishlist> = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

export default mongoose.model<IWishlist>("Wishlist", WishlistSchema);
