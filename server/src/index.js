import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import projectRoutes from "./routes/project.js";
import contactRoutes from "./routes/contact.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[api] listening on :${PORT}`));
const MONGODB_URI =
	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

const app = express();

app.set("trust proxy", 1);
app.use(helmet());
app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));
app.use(express.json({ limit: "32kb" }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

app.get("/api/health", (_req, res) =>
	res.json({ ok: true, uptime: process.uptime() }),
);

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

app.use(notFound);
app.use(errorHandler);

async function start() {
	try {
		await connectDB(MONGODB_URI);
		app.listen(PORT, () => console.log(`[api] listening on :${PORT}`));
	} catch (err) {
		console.error("[fatal] failed to start", err);
		process.exit(1);
	}
}

start();
