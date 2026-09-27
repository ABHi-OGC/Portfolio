import { useEffect, useRef } from "react";

export default function ScrollProgress() {
	const barRef = useRef(null);

	useEffect(() => {
		let ticking = false;
		const update = () => {
			const doc = document.documentElement;
			const max = doc.scrollHeight - window.innerHeight;
			const ratio = max > 0 ? window.scrollY / max : 0;
			if (barRef.current) {
				barRef.current.style.transform = `scaleX(${ratio})`;
			}
			ticking = false;
		};
		const onScroll = () => {
			if (!ticking) {
				requestAnimationFrame(update);
				ticking = true;
			}
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		update();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="progress" aria-hidden="true">
			<span ref={barRef} />
		</div>
	);
}
