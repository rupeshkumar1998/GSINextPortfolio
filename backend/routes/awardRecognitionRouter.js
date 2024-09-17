import express from "express";
import {
  addNewAwardRecognition,
  deleteAwardRecognition,
  getAllAwardRecognitions,
  updateAwardRecognition,
} from "../controller/awardRecognitionController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", isAuthenticated, addNewAwardRecognition);
router.delete("/delete/:id", isAuthenticated, deleteAwardRecognition);
router.put("/update/:id", isAuthenticated, updateAwardRecognition);
router.get("/getall", getAllAwardRecognitions);

export default router;
