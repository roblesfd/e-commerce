import mongoose, { Schema, Types } from "mongoose";

interface IUser {
  username: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: "customer" | "admin";
  address?: {
    street: string;
    city: string;
    postalCode: string;
    state: string;
    country: string;
  };
  orders: Types.ObjectId[];
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
  {
    username: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    address: {
      street: { type: String },
      city: { type: String },
      postalCode: { type: String },
      state: { type: String },
      country: { type: String },
    },
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
