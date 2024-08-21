import Link from "next/link";
import { useCallback } from "react";

function ScrollLink({ id, children }) {
	const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

	const scrollToElement = useCallback((element, duration = 800) => {
		const start = window.pageYOffset;
		const targetPosition = element.getBoundingClientRect().top;
		const startTime =
			"now" in window.performance
				? performance.now()
				: new Date().getTime();

		const scroll = () => {
			const currentTime =
				"now" in window.performance
					? performance.now()
					: new Date().getTime();
			const timeElapsed = currentTime - startTime;
			const scrollProgress = Math.min(timeElapsed / duration, 1);
			const ease = easeInOutQuad(scrollProgress);

			window.scrollTo(0, start + targetPosition * ease);

			if (timeElapsed < duration) {
				requestAnimationFrame(scroll);
			}
		};

		requestAnimationFrame(scroll);
	}, []);

	const handleClick = (e) => {
		e.preventDefault();

		const element = document.getElementById(id);

		if (element) {
			scrollToElement(element, 8000); // Adjust duration as needed
		}
	};

	return (
		<Link href={`#${id}`} passHref>
			<div
				onClick={handleClick}
				className="transition ease-out duration-300 hover:opacity-50 hover:scale-105"
			>
				{children}
			</div>
		</Link>
	);
}

export default ScrollLink;
