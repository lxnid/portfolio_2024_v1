import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Gallery = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });

	// Define the parallax effects for each column
	const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
	const y2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, -600]);
	return (
		<section
			id="sectionGallery"
            className="flex w-full min-h-screen h-[140vh] md:h-[200vh] relative"
            data-bgcolor="#000000"
			data-textcolor="#ffffff"
			ref={ref}
		>
			<motion.div
				initial={{ y: 48, opacity: 0, scale: 1.5, rotateX: 45 }}
				whileInView={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
				transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
				viewport={{ once: false, margin: "-50%" }}
				className="w-full h-[100vh] sticky top-0 flex overflow-hidden"
				style={{ perspective: "1000px" }}
			>
				{/* First Column */}
				<motion.span
					className="w-1/3 space-y-3 px-1 md:px-2"
					style={{ y: y1 }}
				>
					<div
						className="w-full h-[600px]"
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1542351967-d5ae722fed71?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
					<div
						className="w-full h-[600px]"
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1532529867795-3c83442c1e5c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
					<div
						className="w-full h-[600px]"
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=2996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
				</motion.span>

				{/* Second Column */}
				<motion.span
					className="w-1/3 space-y-3 px-1 md:px-2"
					style={{ y: y2 }}
				>
					<div
						className="w-full h-[600px]"
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1712916687044-2cb57f9fc067?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
					<div
						className="w-full h-[600px]"
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1519619091416-f5d7e5200702?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
					<div
						className="w-full h-[600px]"
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1605379399582-21f603abaed5?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
				</motion.span>

				{/* Third Column */}
				<motion.span
					className="w-1/3 space-y-3 px-1 md:px-2"
					style={{ y: y3 }}
				>
					<div
						className="w-full h-[600px]"
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
					<div
						className="w-full h-[600px]"
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
					<div
						className="w-full h-[600px]"
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1624896387301-b232d31f2f1f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
				</motion.span>
			</motion.div>
		</section>
	);
};

export default Gallery;
