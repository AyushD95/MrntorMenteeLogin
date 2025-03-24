import { createHmac, randomBytes } from "crypto";
import { Schema, model } from "mongoose";

const mentorSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    salt: { type: String },
    password: { type: String },
    role: { type: String, required: true },
    experience: { type: String, required: true }, // Ensure frontend sends this correctly
    skills: { type: String, required: true },
    technologies: { type: String, required: true },
    industry: { type: String, required: true },
    preferredLanguages: { type: String, required: true },
    mentorshipAreas: { type: String, required: true },
    availability: { type: String, required: true },

    socialLinks: { type: String, required: true },
  },
  { timestamps: true }
);

// Hash password before saving
mentorSchema.pre("save", function (next) {
  const mentor = this;

  if (!mentor.isModified("password")) {
    return next();
  }

  if (!mentor.password) {
    return next(new Error("Password is missing"));
  }

  mentor.salt = randomBytes(16).toString("hex");
  mentor.password = createHmac("sha256", mentor.salt).update(mentor.password).digest("hex");

  next();
});

const Mentor = model("Mentor", mentorSchema);

export default Mentor;
