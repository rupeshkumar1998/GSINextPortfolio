import { Message } from "../models/messageSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { senderFirstName, senderLastName, email, phoneNumber, subject, message } = req.body;

  // Check if all required fields are provided
  if (!senderFirstName || !senderLastName || !email || !phoneNumber || !subject || !message) {
    return next(new ErrorHandler("Please fill out the complete form!", 400));
  }

  // Create and save the message
  const data = await Message.create({
    senderFirstName,
    senderLastName,
    email,
    phoneNumber,
    subject,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Message Sent",
    data,
  });
});

export const deleteMessage = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const message = await Message.findById(id);

  if (!message) {
    return next(new ErrorHandler("Message already deleted!", 400));
  }

  await message.deleteOne();

  res.status(201).json({
    success: true,
    message: "Message Deleted",
  });
});

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();

  res.status(200).json({
    success: true,
    messages,
  });
});


