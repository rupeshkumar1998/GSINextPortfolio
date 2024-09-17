import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { About } from "../models/aboutSchema.js";
import { v2 as cloudinary } from "cloudinary";

// Add New About
export const addNewAbout = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Image For About Required!", 404));
  }
  const { svg } = req.files;
  const { title, content, imageAlt, isCentered } = req.body;
  if (!title || !content || !imageAlt || isCentered === undefined) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const cloudinaryResponse = await cloudinary.uploader.upload(svg.tempFilePath, {
    folder: "PORTFOLIO ABOUT IMAGES",
  });

  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error("Cloudinary Error:", cloudinaryResponse.error || "Unknown Cloudinary error");
    return next(new ErrorHandler("Failed to upload image to Cloudinary", 500));
  }

  const about = await About.create({
    title,
    content,
    svg: {
      public_id: cloudinaryResponse.public_id, 
      url: cloudinaryResponse.secure_url, 
    },
    imageAlt,
    isCentered,
  });

  res.status(201).json({
    success: true,
    message: "New About Added",
    about,
  });
});

// Delete About
export const deleteAbout = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let about = await About.findById(id);
  if (!about) {
    return next(new ErrorHandler("Already Deleted!", 404));
  }

  const aboutSvgId = about.svg.public_id;
  await cloudinary.uploader.destroy(aboutSvgId);

  await about.deleteOne();
  res.status(200).json({
    success: true,
    message: "About Deleted!",
  });
});

// Update About
export const updateAbout = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let about = await About.findById(id);
  if (!about) {
    return next(new ErrorHandler("About not found!", 404));
  }

  const { title, content, imageAlt, isCentered } = req.body;

  // Check if there's a new image uploaded
  if (req.files && req.files.svg) {
    const aboutSvgId = about.svg.public_id;
    await cloudinary.uploader.destroy(aboutSvgId);

    const cloudinaryResponse = await cloudinary.uploader.upload(req.files.svg.tempFilePath, {
      folder: "PORTFOLIO ABOUT IMAGES",
    });

    if (!cloudinaryResponse || cloudinaryResponse.error) {
      console.error("Cloudinary Error:", cloudinaryResponse.error || "Unknown Cloudinary error");
      return next(new ErrorHandler("Failed to upload image to Cloudinary", 500));
    }

    about.svg = {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    };
  }

  // Update other fields if provided
  about.title = title || about.title;
  about.content = content || about.content;
  about.imageAlt = imageAlt || about.imageAlt;
  about.isCentered = isCentered !== undefined ? isCentered : about.isCentered;

  await about.save();

  res.status(200).json({
    success: true,
    message: "About Updated!",
    about,
  });
});

// Get All Abouts
export const getAllAbouts = catchAsyncErrors(async (req, res, next) => {
  const abouts = await About.find();
  res.status(200).json({
    success: true,
    abouts,
  });
});
