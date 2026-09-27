import Reveal from "./Reveal.jsx";

export default function ProjectCard({ project, delay = 0 }) {
	const { title, summary, category, tags, liveUrl, githubUrl, thumbnail } =
		project;

	return (
		<Reveal className="card" delay={delay}>
			{/* Replaced the gradient div with an img tag */}
			<div className="thumb">
				<img
					src={thumbnail}
					alt={`${title} screenshot`}
					className="thumb-img"
				/>
				<span className="thumb-tag">{category}</span>
			</div>

			<div className="card-body">
				<h3>{title}</h3>
				<p>{summary}</p>
				<ul className="tags">
					{tags.map((t) => (
						<li key={t}>{t}</li>
					))}
				</ul>
				<div
					className="project-links"
					style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
					<a
						href={liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-ghost"
						style={{ padding: ".4rem 1rem", fontSize: ".8rem" }}>
						Live Demo ↗
					</a>
					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-ghost"
						style={{ padding: ".4rem 1rem", fontSize: ".8rem" }}>
						GitHub
					</a>
				</div>
			</div>
		</Reveal>
	);
}
