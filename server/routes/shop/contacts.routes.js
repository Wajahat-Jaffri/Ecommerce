import express from "express";
import { sendContactMessage } from "../../controller/shop/contacts.controller.js";

const router = express.Router();

// POST /api/contact
router.post("/", sendContactMessage);

export default router;