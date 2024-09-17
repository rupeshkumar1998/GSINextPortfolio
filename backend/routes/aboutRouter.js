import express from "express";
import {
  addNewAbout,
  deleteAbout,
  getAllAbouts,
  updateAbout,
} from "../controller/aboutController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", isAuthenticated, addNewAbout);
router.delete("/delete/:id", isAuthenticated, deleteAbout);
router.put("/update/:id", isAuthenticated, updateAbout);
router.get("/getall", getAllAbouts);

export default router;
