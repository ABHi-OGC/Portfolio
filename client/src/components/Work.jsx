// client/src/components/Work.jsx
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";

export default function Work() {
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

				<div className="work-grid">
					{projects.map((project, i) => (
						<ProjectCard key={project.id} project={project} delay={i * 0.08} />
					))}
				</div>
			</div>
		</section>
	);
}
