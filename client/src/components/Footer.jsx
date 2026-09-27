export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container footer-inner">
				<p>© {new Date().getFullYear()} Abhishek. Built with the MERN stack.</p>
				<nav className="socials" aria-label="Elsewhere">
					<a
						href="https://github.com/ABHi-OGC"
						target="_blank"
						rel="noopener noreferrer">
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/abhishek-042922393"
						target="_blank"
						rel="noopener noreferrer">
						LinkedIn
					</a>
				</nav>
			</div>
		</footer>
	);
}
