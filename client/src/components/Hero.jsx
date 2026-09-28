import Reveal from "./Reveal.jsx";

const stats = [
	{ label: "Education", value: "BCA" },
	{ label: "Technologies", value: "10+" },
	{ label: "Location", value: "Kerala, India" },
	{ label: "Languages", value: "Eng / Mal" },
];

export default function Hero() {
	return (
		<section className="hero" id="top">
			<div className="container">
				<Reveal as="p" className="pill">
					<span className="dot" aria-hidden="true" />
					Available for entry-level roles — Immediate start
				</Reveal>

				<Reveal as="h1" delay={0.06}>
					Hi, I'm Abhishek. I build <em>responsive</em> web applications.
				</Reveal>

				<Reveal as="p" className="lede" delay={0.12}>
					BCA graduate with practical experience in React, JavaScript, HTML,
					CSS, Node.js, Express, and MongoDB. I focus on frontend development
					and UI-focused design to create user-friendly digital experiences.
				</Reveal>

				<Reveal className="hero-actions" delay={0.18}>
					{/* PRIMARY ACTION: Resume with glow and icon */}
					<a
						className="btn btn-primary btn-glow"
						href="/resume.pdf"
						download="Abhishek_Resume.pdf"
						style={{ padding: ".875rem 1.75rem" }}>
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round">
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
							<polyline points="7 10 12 15 17 10" />
							<line x1="12" y1="15" x2="12" y2="3" />
						</svg>
						Download Resume
					</a>

					{/* SECONDARY ACTION: Projects link */}
					<a className="btn btn-ghost" href="#work">
						View my projects <span aria-hidden="true">→</span>
					</a>
				</Reveal>

				<Reveal as="dl" className="stats" delay={0.24}>
					{stats.map((s) => (
						<div key={s.label}>
							<dt>{s.label}</dt>
							<dd>{s.value}</dd>
						</div>
					))}
				</Reveal>
			</div>
		</section>
	);
}
