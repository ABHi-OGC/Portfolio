import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, trim: true, maxlength: 80 },
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
			maxlength: 160,
		},
		subject: { type: String, trim: true, maxlength: 140, default: "" },
		body: { type: String, required: true, trim: true, maxlength: 4000 },
		ip: { type: String, select: false },
		userAgent: { type: String, select: false },
		read: { type: Boolean, default: false },
	},
	{ timestamps: true },
);

messageSchema.index({ createdAt: -1 });

export const Message = mongoose.model("Message", messageSchema);
