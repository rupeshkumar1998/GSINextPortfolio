import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { AwardRecognition } from "../models/awardRecognitionSchema.js";
import { v2 as cloudinary } from "cloudinary";

// Add New awardRecognition 
export const addNewAwardRecognition = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Image For AwardRecognition Required!", 404));
  }
  
  const { svg } = req.files;
  const { title, content, tags, isCentered } = req.body;

  if (!title || !content || !tags || isCentered === undefined) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const cloudinaryResponse = await cloudinary.uploader.upload(svg.tempFilePath, {
    folder: "PORTFOLIO AWARD_RECOGNITION IMAGES",
  });

  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error("Cloudinary Error:", cloudinaryResponse.error || "Unknown Cloudinary error");
    return next(new ErrorHandler("Failed to upload image to Cloudinary", 500));
  }

  const awardRecognition = await AwardRecognition.create({
    title,
    content,
    tags,
    svg: {
      public_id: cloudinaryResponse.public_id, 
      url: cloudinaryResponse.secure_url, 
    },
    isCentered,
    uploadDate: new Date(),
  });

  res.status(201).json({
    success: true,
    message: "New AwardRecognition Added",
    awardRecognition,
  });
});

// Delete AwardRecognition
export const deleteAwardRecognition = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let awardRecognition = await AwardRecognition.findById(id);

  if (!awardRecognition) {
    return next(new ErrorHandler("Already Deleted!", 404));
  }

  const awardRecognitionSvgId = awardRecognition.svg.public_id;
  await cloudinary.uploader.destroy(awardRecognitionSvgId);

  await awardRecognition.deleteOne();
  res.status(200).json({
    success: true,
    message: "AwardRecognition Deleted!",
  });
});

// Update AwardRecognition
export const updateAwardRecognition = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let awardRecognition = await AwardRecognition.findById(id);

  if (!awardRecognition) {
    return next(new ErrorHandler("AwardRecognition not found!", 404));
  }

  const { title, content, tags, isCentered } = req.body;

  // Check if there's a new image uploaded
  if (req.files && req.files.svg) {
    const awardRecognitionSvgId = awardRecognition.svg.public_id;
    await cloudinary.uploader.destroy(awardRecognitionSvgId);

    const cloudinaryResponse = await cloudinary.uploader.upload(req.files.svg.tempFilePath, {
      folder: "PORTFOLIO AWARD_RECOGNITION IMAGES",
    });

    if (!cloudinaryResponse || cloudinaryResponse.error) {
      console.error("Cloudinary Error:", cloudinaryResponse.error || "Unknown Cloudinary error");
      return next(new ErrorHandler("Failed to upload image to Cloudinary", 500));
    }

    awardRecognition.svg = {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    };
  }

  // Update other fields if provided
  awardRecognition.title = title || awardRecognition.title;
  awardRecognition.content = content || awardRecognition.content;
  awardRecognition.tags = tags || awardRecognition.tags;
  awardRecognition.isCentered = isCentered !== undefined ? isCentered : awardRecognition.isCentered;

  await awardRecognition.save();

  res.status(200).json({
    success: true,
    message: "AwardRecognition Updated!",
    awardRecognition,
  });
});

// Get All AwardRecognitions
export const getAllAwardRecognitions = catchAsyncErrors(async (req, res, next) => {
  const awardRecognitions = await AwardRecognition.find();
  res.status(200).json({
    success: true,
    awardRecognitions,
  });
});
