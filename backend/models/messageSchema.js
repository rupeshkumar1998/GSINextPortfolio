import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderFirstName: {
    type: String,
    minLength: [2, "First Name must contain at least 2 characters!"],
    required: [true, "First Name is required!"],
  },
  senderLastName: {
    type: String,
    minLength: [2, "Last Name must contain at least 2 characters!"],
    required: [true, "Last Name is required!"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    match: [/\S+@\S+\.\S+/, "Please use a valid email address!"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required!"],
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number!"], // Assuming a 10-digit number format
  },
  subject: {
    type: String,
    minLength: [2, "Subject must contain at least 2 characters!"],
    required: [true, "Subject is required!"],
  },
  message: {
    type: String,
    minLength: [2, "Message must contain at least 2 characters!"],
    required: [true, "Message is required!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Message = mongoose.model("Message", messageSchema);
