import { Router } from "express";
import { listProjects, getProject } from "../controllers/projectControllers.js";

const router = Router();
router.get("/", listProjects);
router.get("/:slug", getProject);

export default router;
