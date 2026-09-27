import Reveal from "./Reveal.jsx";

const stack = [
	["Frontend", "HTML5, CSS3, JavaScript, React.js"],
	["Backend", "Node.js, Express.js"],
	["Database", "MongoDB, SQL"],
	["Tools", "Git, GitHub, Vercel, Figma"],
	["Languages", "English (Fluent), Malayalam (Native)"],
];

export default function About() {
	return (
		<section className="section" id="about">
			<div className="container">
				<div className="about-grid">
					<div>
						<Reveal as="p" className="eyebrow">
							About Me
						</Reveal>
						<Reveal as="h2" className="section-title" delay={0.06}>
							A developer focused on user-friendly experiences.
						</Reveal>
						<Reveal className="about-copy" delay={0.12}>
							<p>
								I am a BCA graduate from Srinivas University with a strong
								foundation in software development. I recently completed
								comprehensive MERN Stack training, where I gained hands-on
								experience in full-stack web development, REST APIs, database
								integration, and deployment.
							</p>
							<p>
								My approach is <strong>practical and UI-focused</strong>. I
								enjoy turning ideas into functional, responsive applications
								that look great on any device. I'm eager to apply my technical
								skills in an entry-level role where I can contribute to
								meaningful projects and continue growing as a web developer.
							</p>
						</Reveal>

						<Reveal
							className="about-copy"
							delay={0.16}
							style={{ marginTop: "2rem" }}>
							<h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
								Education
							</h3>
							<ul
								style={{
									color: "var(--muted)",
									fontSize: "0.9rem",
									lineHeight: "1.8",
								}}>
								<li>
									<strong>BCA, Software Development</strong> — Srinivas
									University
								</li>
								<li>
									<strong>+2, Commerce</strong> — CHSS Chethrapinni
								</li>
								<li>
									<strong>SSLC</strong> — Le mer Public School
								</li>
							</ul>
						</Reveal>
					</div>

					<Reveal
						as="aside"
						className="stack"
						delay={0.18}
						aria-label="Skills and technologies">
						<h3>Skills &amp; Stack</h3>
						<dl>
							{stack.map(([k, v]) => (
								<div key={k}>
									<dt>{k}</dt>
									<dd>{v}</dd>
								</div>
							))}
						</dl>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
