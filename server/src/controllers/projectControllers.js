import { Project } from "../models/Project.js";

export async function listProjects(req, res, next) {
	try {
		const filter = {};
		if (req.query.featured === "true") filter.featured = true;

		const limit = Math.min(Number(req.query.limit) || 0, 50);
		let query = Project.find(filter).sort({ order: 1, createdAt: -1 });
		if (limit) query = query.limit(limit);

		res.json({ data: await query.lean() });
	} catch (err) {
		next(err);
	}
}

export async function getProject(req, res, next) {
	try {
		const project = await Project.findOne({ slug: req.params.slug }).lean();
		if (!project) return res.status(404).json({ error: "Project not found" });
		res.json({ data: project });
	} catch (err) {
		next(err);
	}
}
