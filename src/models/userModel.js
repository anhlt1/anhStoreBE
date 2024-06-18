import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true } // "timestamps: true" sẽ tự động tạo các trường cho thời gian khi người dùng được tạo và lần cập nhật cuối cùng.
);

const User = mongoose.model("User", userSchema);

export default User;
