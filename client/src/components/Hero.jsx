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
					<a className="btn btn-primary" href="#work">
						View my projects <span aria-hidden="true">→</span>
					</a>
					<a className="btn btn-ghost" href="mailto:abhipy10@gmail.com">
						abhipy10@gmail.com
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
