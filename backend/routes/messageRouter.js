import express from "express";
import { deleteMessage, getAllMessages, sendMessage } from "../controller/messageController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Route to send a message (open to public)
router.post("/send", sendMessage);

// Route to delete a message (requires authentication)
router.delete("/delete/:id", isAuthenticated, deleteMessage);

// Route to get all messages (requires authentication)
router.get("/getall", isAuthenticated, getAllMessages);

export default router;
