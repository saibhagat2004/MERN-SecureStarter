import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      sparse: true, // Allows Google users to sign up without a username
    },
    fullName: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      minLength: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true, // Allows users to sign up with Google without conflicts
    },
    role:{
      type:String
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
