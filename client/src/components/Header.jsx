import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import { useTheme } from "../hooks/useTheme.js";

const links = [
	{ href: "#work", label: "Work" },
	{ href: "#capabilities", label: "Capabilities" },
	{ href: "#about", label: "About" },
];

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const { theme, toggle } = useTheme();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth > 768) setMenuOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	const closeMenu = () => setMenuOpen(false);

	return (
		<>
			<header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
				<div className="container header-inner">
					<a className="brand" href="#top" aria-label="Abhishek — home">
						<span className="brand-mark" aria-hidden="true">
							A
						</span>
						<span className="brand-name">ABHISHEK</span>
					</a>

					<div className="header-right">
						<nav aria-label="Primary">
							<ul className="nav-list">
								{links.map((l) => (
									<li key={l.href}>
										<a href={l.href}>{l.label}</a>
									</li>
								))}
								<li>
									<a className="nav-cta" href="#contact">
										Get in touch
									</a>
								</li>
							</ul>
						</nav>

						<ThemeToggle theme={theme} onToggle={toggle} />

						<button
							type="button"
							className="menu-toggle"
							aria-label={menuOpen ? "Close menu" : "Open menu"}
							aria-expanded={menuOpen}
							aria-controls="mobile-nav"
							onClick={() => setMenuOpen((v) => !v)}>
							{menuOpen ? (
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round">
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							) : (
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round">
									<line x1="3" y1="7" x2="21" y2="7" />
									<line x1="3" y1="12" x2="21" y2="12" />
									<line x1="3" y1="17" x2="21" y2="17" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</header>

			<nav
				id="mobile-nav"
				className={`mobile-nav${menuOpen ? " is-open" : ""}`}
				aria-label="Mobile">
				<ul>
					{links.map((l) => (
						<li key={l.href}>
							<a href={l.href} onClick={closeMenu}>
								{l.label}
							</a>
						</li>
					))}
					<li>
						<a className="nav-cta" href="#contact" onClick={closeMenu}>
							Get in touch
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
