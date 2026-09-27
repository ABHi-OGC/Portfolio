import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../config/db.js";
import { Project } from "../models/Project.js";

const projects = [
	{
		title: "Movie Explorer",
		slug: "movie-explorer",
		summary:
			"Built and deployed a responsive movie discovery application using React.js and JavaScript. Integrated the TMDB API to dynamically display movie information, featuring movie categories, dynamic content, and interactive sliders.",
		category: "Web Application",
		tags: ["React.js", "JavaScript", "Axios", "TMDB API", "Vercel"],
		liveUrl: "https://mmdb-11.vercel.app/", // Replace with actual Vercel link
		githubUrl: "https://github.com/ABHi-OGC/MMDB", // Replace with actual GitHub link
		thumbnail: "/thumb/MovieExplorer.png",
		featured: true,
		order: 1,
	},
	// Placeholder for future projects (so the grid doesn't look empty)
	{
		title: "Portfolio Website",
		slug: "portfolio-website",
		summary:
			"Designed and built a full-stack personal portfolio to showcase my skills and projects. Features a custom dark-mode UI, smooth scroll animations, and a contact form backed by an Express API.",
		category: "Full Stack",
		tags: ["MongoDB", "Express", "React", "Node.js"],
		liveUrl: "#contact",
		githubUrl: "#contact",
		thumbnail: "/thumb/Portfolio.png",
		featured: true,
		order: 2,
	},
];

async function run() {
	await connectDB(
		process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio",
	);
	await Project.deleteMany({});
	await Project.insertMany(projects);
	console.log(`[seed] inserted ${projects.length} projects`);
	await mongoose.disconnect();
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
});
