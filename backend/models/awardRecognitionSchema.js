import mongoose from "mongoose";

const awardRecognitionSchema = new mongoose.Schema({
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
  tags: {
    type: String,
    required: true,
  },
  isCentered: {
    type: Boolean,
    required: true,
  },
  uploadDate:{
    type: Date,
    required: true,
  }
});

export const AwardRecognition = mongoose.model("awardRecognition", awardRecognitionSchema);
