import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  svg: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  imageAlt: {
    type: String,
    required: true,
  },
  isCentered: {
    type: Boolean,
    required: true,
  },
});

export const About = mongoose.model("about", aboutSchema);
