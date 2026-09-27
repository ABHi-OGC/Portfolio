import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, trim: true, maxlength: 80 },
		slug: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			index: true,
		},
		summary: { type: String, required: true, trim: true, maxlength: 400 },
		category: { type: String, required: true, trim: true, maxlength: 40 },
		tags: [{ type: String, trim: true, maxlength: 24 }],
		liveUrl: { type: String, default: "#contact" },
		githubUrl: { type: String, default: "#contact" },
		thumbnail: {
			type: String,
			default: "",
		},
		featured: { type: Boolean, default: false },
		order: { type: Number, default: 0 },
	},
	{ timestamps: true },
);

projectSchema.index({ order: 1, createdAt: -1 });

export const Project = mongoose.model("Project", projectSchema);
