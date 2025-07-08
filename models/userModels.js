import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    firstName:{type:string},
    lastName:{type:string},
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String, default: "user" },
    status: { type: String, default: "active" }
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);