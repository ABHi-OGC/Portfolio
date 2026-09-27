import { z } from "zod";
import { Message } from "../models/Message.js";

const contactSchema = z.object({
	name: z.string().trim().min(2, "Name is too short").max(80),
	email: z.string().trim().email("Enter a valid email").max(160),
	subject: z.string().trim().max(140).optional().default(""),
	body: z.string().trim().min(10, "Message is too short").max(4000),
	company: z.string().max(0).optional().default(""), // honeypot — must stay empty
});

export async function createMessage(req, res, next) {
	try {
		const parsed = contactSchema.safeParse(req.body);
		if (!parsed.success) {
			return res.status(422).json({
				error: "Validation failed",
				issues: parsed.error.flatten().fieldErrors,
			});
		}

		const { name, email, subject, body } = parsed.data;

		const message = await Message.create({
			name,
			email,
			subject,
			body,
			ip: req.ip,
			userAgent: req.get("user-agent") ?? "",
		});

		res.status(201).json({
			data: { id: message._id, createdAt: message.createdAt },
			message: "Thanks — your message is in the queue.",
		});
	} catch (err) {
		next(err);
	}
}
