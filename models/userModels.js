import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    firstName:{type:String},
    lastName:{type:String},
    email: { type: String, unique: true },
    password: { type: String },
   
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);