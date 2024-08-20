import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
	FaApple,
	FaGoogle,
	FaAmazon,
	FaFacebook,
	FaMicrosoft,
} from "react-icons/fa";

const AutoScrollIconList = () => {
	const scrollRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const scrollElement = scrollRef.current;
		let scrollPosition = 0;

		const scrollIcons = () => {
			if (scrollElement) {
				scrollPosition += 1;
				scrollElement.scrollLeft = scrollPosition;

				// Reset scroll position when reaching the end
				if (
					scrollPosition >=
					scrollElement.scrollWidth - scrollElement.clientWidth
				) {
					scrollPosition = 0;
				}
			}

			requestAnimationFrame(scrollIcons);
		};

		scrollIcons();
	}, []);

	return (
		<div className="w-full overflow-hidden absolute">
			<motion.div
				ref={scrollRef}
				className="flex gap-8 whitespace-nowrap py-8"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<IconItem icon={<FaApple />} name="Apple" />
				<IconItem icon={<FaGoogle />} name="Google" />
				<IconItem icon={<FaAmazon />} name="Amazon" />
				<IconItem icon={<FaFacebook />} name="Facebook" />
				<IconItem icon={<FaMicrosoft />} name="Microsoft" />
				{/* Repeat items for continuous scrolling */}
				<IconItem icon={<FaApple />} name="Apple" />
				<IconItem icon={<FaGoogle />} name="Google" />
				<IconItem icon={<FaAmazon />} name="Amazon" />
				<IconItem icon={<FaFacebook />} name="Facebook" />
				<IconItem icon={<FaMicrosoft />} name="Microsoft" />
			</motion.div>
		</div>
	);
};

interface IconItemProps {
	icon: JSX.Element;
	name: string;
}

const IconItem = ({ icon, name }: IconItemProps) => (
	<div className="flex flex-col items-center space-y-2">
		<div className="text-5xl">{icon}</div>
		<span className="text-lg font-medium">{name}</span>
	</div>
);

export default AutoScrollIconList;
