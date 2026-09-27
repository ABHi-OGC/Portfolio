import { useEffect, useState } from "react";

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
			<div className="container header-inner">
				<a className="brand" href="#top" aria-label="ABHISHEK — home">
					<span className="brand-mark" aria-hidden="true">
						A
					</span>
					<span className="brand-name">ABHISHEK</span>
				</a>

				<nav aria-label="Primary">
					<ul className="nav-list">
						<li>
							<a href="#work">Work</a>
						</li>
						<li>
							<a href="#capabilities">Capabilities</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a className="nav-cta" href="#contact">
								Get in touch
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
