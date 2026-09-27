import Reveal from "./Reveal.jsx";

const caps = [
	{
		n: "01",
		title: "Frontend Development",
		body: "Building responsive and interactive user interfaces using React.js, JavaScript, HTML5, and CSS3. Focused on reusable components and clean UI design.",
	},
	{
		n: "02",
		title: "Backend & REST APIs",
		body: "Creating server-side logic and RESTful APIs with Node.js and Express.js. Handling routing, middleware, and database integration.",
	},
	{
		n: "03",
		title: "Database Management",
		body: "Working with MongoDB for NoSQL data storage and SQL for relational databases. Designing schemas and querying data efficiently.",
	},
	{
		n: "04",
		title: "Tools & Deployment",
		body: "Version control with Git and GitHub. Deploying web applications using Vercel. Designing wireframes and UI mockups in Figma.",
	},
];

export default function Capabilities() {
	return (
		<section className="section" id="capabilities">
			<div className="container">
				<div className="section-head">
					<div>
						<Reveal as="p" className="eyebrow">
							Capabilities
						</Reveal>
						<Reveal as="h2" className="section-title" delay={0.06}>
							What I bring to the table.
						</Reveal>
					</div>
				</div>

				<ol className="caps">
					{caps.map((c, i) => (
						<Reveal as="li" key={c.n} delay={i * 0.04}>
							<span className="caps-num">{c.n}</span>
							<h3>{c.title}</h3>
							<p>{c.body}</p>
						</Reveal>
					))}
				</ol>
			</div>
		</section>
	);
}
