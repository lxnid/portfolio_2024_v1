"use client";
import React, { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import Blob from "./blobBgHero";
import {
	motion,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";

export const Hero = () => {
	let shouldAnimate = true;

	const { scrollYProgress } = useScroll();
	const x1 = useTransform(scrollYProgress, [0, 1], [250, -8000]);
	const x2 = useTransform(scrollYProgress, [0, 1], [-500, 5000]);
	return (
		// <ReactLenis root options={{lerp: 0.05,}}>
		<section
			id="sectionHero"
			className="h-auto sm:h-[150vh] md:h-[260vh] relative"
		>
			<div
				className={`z-10 sticky top-0 text-nowrap leading-none md:text-nowrap`}
			>
				<Blob />
				<motion.div
					style={
						shouldAnimate ? { x: x1, y: "-60vh" } : { y: "-60vh" }
					}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 20,
						duration: 2,
						ease: "easeInOut",
					}}
					className="opacity-80 text-[200px] sm:text-[250px] md:text-[290px] font-Eklektyk font-bold uppercase"
				>
					coding creativity into reality
				</motion.div>
				<motion.div
					style={
						shouldAnimate ? { x: x2, y: "-60vh" } : { y: "-60vh" }
					}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 20,
						duration: 2,
						ease: "easeInOut",
					}}
					className="opacity-80 text-[200px] sm:text-[250px] md:text-[290px] md:hidden font-Eklektyk font-bold uppercase"
				>
					into reality coding creativity
				</motion.div>
			</div>
			<ParallaxImages />
		</section>
		// </ReactLenis>
	);
};

const ParallaxImages = () => {
	return (
		<div className="mx-auto max-w-full px-4 pt-[200px] hidden md:block">
			<ParallaxImg
				src="https://images.unsplash.com/photo-1542351967-d5ae722fed71?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="And example of a space launch"
				start={-2000}
				end={-200}
				rotate="90deg"
				className="w-1/5"
			/>
			<ParallaxImg
				src="https://images.unsplash.com/photo-1532529867795-3c83442c1e5c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="An example of a space launch"
				start={-1000}
				end={-250}
				rotate="0"
				className="mx-auto w-[12%] relative z-20"
			/>
			<ParallaxImg
				src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=2996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Orbiting satellite"
				start={-5000}
				end={-500}
				rotate="0"
				className="ml-auto w-1/6 relative z-20"
			/>
			<ParallaxImg
				src="https://images.unsplash.com/photo-1712916687044-2cb57f9fc067?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Orbiting satellite"
				start={-800}
				end={-500}
				rotate="90deg"
				className="ml-24 w-1/5 relative z-20"
			/>
			<ParallaxImg
				src="https://images.unsplash.com/photo-1519619091416-f5d7e5200702?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Orbiting satellite"
				start={-700}
				end={-500}
				rotate="90deg"
				className="ml-auto w-1/5"
			/>
			<ParallaxImg
				src="https://images.unsplash.com/photo-1605379399582-21f603abaed5?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="An example of a space launch"
				start={-800}
				end={-550}
				rotate="0"
				className="mx-auto w-[12%] relative z-20"
			/>
		</div>
	);
};

const ParallaxImg = ({
	className,
	alt,
	src,
	start,
	end,
	rotate,
}: {
	className?: string;
	alt: string;
	src: string;
	start: number;
	end: number;
	rotate: string;
}) => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: [`${start}px end`, `end ${end * -1}px`],
	});

	const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
	const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

	const y = useTransform(scrollYProgress, [0, 1], [start, end + 200]);
	const transform = useMotionTemplate`translateY(${y}px) scale(${scale}) rotate(${rotate})`;

	return (
		<motion.img
			src={src}
			alt={alt}
			className={className}
			ref={ref}
			style={{ transform, opacity }}
		/>
	);
};
