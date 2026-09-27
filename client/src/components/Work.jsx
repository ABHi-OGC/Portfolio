import { useProjects } from "../hooks/useProjects.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";

function SkeletonCard() {
	return (
		<div className="card card-skeleton" aria-hidden="true">
			<div className="thumb skeleton-block" />
			<div className="card-body">
				<div className="skeleton-line skeleton-line-lg" />
				<div className="skeleton-line" />
				<div className="skeleton-line skeleton-line-sm" />
			</div>
		</div>
	);
}

export default function Work() {
	const { projects, status, error } = useProjects({ featured: "true" });

	return (
		<section className="section" id="work">
			<div className="container">
				<div className="section-head">
					<div>
						<Reveal as="p" className="eyebrow">
							Selected work
						</Reveal>
						<Reveal as="h2" className="section-title" delay={0.06}>
							Projects I've built and deployed.
						</Reveal>
					</div>
					<Reveal as="p" delay={0.12}>
						A showcase of my practical experience in full-stack web development.
					</Reveal>
				</div>

				{status === "loading" && (
					<div className="work-grid">
						{Array.from({ length: 2 }).map((_, i) => (
							<SkeletonCard key={i} />
						))}
					</div>
				)}

				{status === "error" && (
					<div className="form-status error" role="alert">
						Couldn't load projects — {error.message}. Is the API running?
					</div>
				)}

				{status === "success" && (
					<div className="work-grid">
						{projects.map((p, i) => (
							<ProjectCard key={p._id} project={p} delay={i * 0.08} />
						))}
					</div>
				)}
			</div>
		</section>
	);
}
