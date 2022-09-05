import mongoose from "mongoose";

export default mongoose.model(
  "users",
  new mongoose.Schema({
    name: String,
    avatar: String,
    uid: { type: String, required: true },
    email: String,
    provider: String,
    phone: String,
    sex: { type: Boolean, default: true },
    date_of_birth: Date,
    created_at: { type: Date, required: false },
    updated_at: { type: Date, required: false, default: Date.now() },
  })
);
