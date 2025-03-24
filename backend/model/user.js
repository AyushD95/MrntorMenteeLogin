import { createHmac, randomBytes } from "crypto";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    salt: { type: String },
    password: { type: String },
    currentRole: { type: String, required: true },
    preferredLanguages: { type: String, required: true }, // Ensure frontend sends this correctly
    socialLinks: { type: String, required: true },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  if (!user.password) {
    return next(new Error("Password is missing"));
  }

  user.salt = randomBytes(16).toString("hex");
  user.password = createHmac("sha256", user.salt).update(user.password).digest("hex");

  next();
});

const User = model("User", userSchema);

export default User;
