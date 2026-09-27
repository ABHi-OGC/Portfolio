import { Router } from "express";
import rateLimit from "express-rate-limit";
import { createMessage } from "../controllers/contactControllers.js";

const router = Router();

const contactLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 5,
	standardHeaders: "draft-7",
	legacyHeaders: false,
	message: { error: "Too many messages. Try again in a few minutes." },
});

router.post("/", contactLimiter, createMessage);

export default router;
