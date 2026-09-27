import { useEffect, useRef } from "react";

export default function Reveal({
	as: Tag = "div",
	delay = 0,
	style,
	children,
	...rest
}) {
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		if (!("IntersectionObserver" in window)) {
			el.classList.add("is-visible");
			return;
		}

		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					io.disconnect();
				}
			},
			{ rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
		);

		io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		<Tag
			ref={ref}
			data-reveal
			style={{ "--d": `${delay}s`, ...style }}
			{...rest}>
			{children}
		</Tag>
	);
}
