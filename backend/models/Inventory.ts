import mongoose, { Schema, Types } from "mongoose";

interface IInventory {
  product: {
    type: Types.ObjectId;
    ref: string;
    required: boolean;
  };

  quantity: number;
  location: string;
}

const InventorySchema: Schema<IInventory> = new mongoose.Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: { type: Number, required: true },
    location: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IInventory>("Inventory", InventorySchema);
