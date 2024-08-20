import React, { ReactNode, useRef } from "react";
import {
	easeIn,
	motion,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";
import { FaLink } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSpotify, BiLogoTypescript } from "react-icons/bi";
import { CgFramer } from "react-icons/cg";
import FramerMagnetic from "@/app/components/framerMagnetic";

export const Work = () => {
	const shouldAnimate = true;

	const { scrollYProgress } = useScroll();
	const x = useTransform(scrollYProgress, [0, 1], [0, 3500]);

	const y = useTransform(scrollYProgress, [0, 1], [-500, 100]);
	const transform = useMotionTemplate`translateX(${x}px)`;
	return (
		<motion.section
			initial={{ y: 48, opacity: 0 }}
			whileInView={{ y: 0, opacity: 0.99 }}
			transition={{ ease: "easeInOut", duration: 0.75 }}
			id="sectionWork"
			className={`h-auto min-h-[80vh] w-full flex flex-col justify-start items-center pt-16`}
		>
			<motion.div
				style={shouldAnimate ? {} : {}}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 20,
					duration: 2,
					ease: "easeInOut",
				}}
			>
				<motion.div
					style={shouldAnimate ? { x } : { transform }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 20,
						duration: 2,
						ease: "easeInOut",
					}}
					className="text-[200px] text-black sm:text-[450px] md:text-[550px] font-dahlia font-bold uppercase text-nowrap"
				>
					work work work work work work work work work work work work
					work work work work work work work work work work work work
					work work work work
				</motion.div>
			</motion.div>

			<div className="md:h-60" />

			<TextParallaxContent
				imgUrl={
					"https://plus.unsplash.com/premium_photo-1676322399274-ea1d64dfc2af?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				}
				subheading={"Personal Portfolio Website"}
				heading={"Portfolio"}
			>
				<Project
					descriptionpara1={
						"Lorem ipsum dolor sit amet consectetur. Justo volutpat mauris eget sit ut senectus vestibulum. Bibendum sit lacus nunc eget a et sed tortor. Dictum est erat senectus arcu risus. Tortor lectus donec pellentesque amet consectetur tempus. Nulla neque cras sed sagittis molestie."
					}
					descriptionpara2={
						"Dolor amet volutpat hendrerit suscipit eu ullamcorper pellentesque purus. Massa nec est tortor risus lacus id est libero ullamcorper. Vitae ut suspendisse scelerisque purus arcu. Ut donec tristique vitae facilisi feugiat gravida id. Sit phasellus at viverra id venenatis amet scelerisque magna viverra."
					}
					descriptionpara3={""}
					img={
						"https://plus.unsplash.com/premium_photo-1676322399274-ea1d64dfc2af?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					link={""}
					icon1={
						<span className="tooltip" data-tip="Next JS">
							<RiNextjsFill className="text-4xl cursor-pointer hover:scale-110 transition duration-300 ease-out" />
						</span>
					}
					icon2={
						<span className="tooltip" data-tip="Tailwind CSS">
							<RiTailwindCssFill className="text-4xl text-[#4da9be] cursor-pointer hover:scale-110 transition duration-300 ease-out" />
						</span>
					}
					icon3={
						<span className="tooltip" data-tip="Typescript">
							<BiLogoTypescript className="text-4xl text-[#3873cb] cursor-pointer hover:scale-110 transition duration-300 ease-out" />
						</span>
					}
					icon4={
						<span className="tooltip" data-tip="Framer Motion">
							<CgFramer className="text-4xl text-[#962dca] cursor-pointer hover:scale-110 transition duration-300 ease-out" />
						</span>
					}
				/>
			</TextParallaxContent>
			<div className="md:h-60" />
			<TextParallaxContent
				imgUrl={
					"https://images.unsplash.com/photo-1557063673-0493e05da49f?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				}
				subheading={"Streaming App, Music"}
				heading={"Melodine"}
			>
				<Project
					descriptionpara1={
						"Lorem ipsum dolor sit amet consectetur. Justo volutpat mauris eget sit ut senectus vestibulum. Bibendum sit lacus nunc eget a et sed tortor. Dictum est erat senectus arcu risus. Tortor lectus donec pellentesque amet consectetur tempus. Nulla neque cras sed sagittis molestie."
					}
					descriptionpara2={
						"Dolor amet volutpat hendrerit suscipit eu ullamcorper pellentesque purus. Massa nec est tortor risus lacus id est libero ullamcorper. Vitae ut suspendisse scelerisque purus arcu. Ut donec tristique vitae facilisi feugiat gravida id. Sit phasellus at viverra id venenatis amet scelerisque magna viverra."
					}
					descriptionpara3={""}
					img={
						"https://images.unsplash.com/photo-1557063673-0493e05da49f?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					link={""}
					icon1={
						<span className="tooltip" data-tip="Next JS">
							<RiNextjsFill className="text-4xl cursor-pointer hover:scale-110 transition duration-300 ease-out" />
						</span>
					}
					icon2={
						<span className="tooltip" data-tip="Tailwind CSS">
							<RiTailwindCssFill className="text-4xl text-[#4da9be] cursor-pointer hover:scale-110 transition duration-300 ease-out" />
						</span>
					}
					icon3={
						<span className="tooltip" data-tip="Typescript">
							<BiLogoTypescript className="text-4xl text-[#3873cb] cursor-pointer hover:scale-110 transition duration-300 ease-out" />
						</span>
					}
					icon4={
						<span className="tooltip" data-tip="Spotify API">
							<BiLogoSpotify className="text-4xl text-[#59b535] cursor-pointer hover:scale-110 transition duration-300 ease-out" />
						</span>
					}
				/>
			</TextParallaxContent>
			<div className="md:h-60" />
		</motion.section>
	);
};

const Project = ({
	descriptionpara1,
	descriptionpara2,
	descriptionpara3,
	img,
	link,
	icon1,
	icon2,
	icon3,
	icon4,
}: {
	descriptionpara1: string;
	descriptionpara2: string;
	descriptionpara3: string;
	img: string;
	link: string;
	icon1: ReactNode;
	icon2: ReactNode;
	icon3: ReactNode;
	icon4: ReactNode;
}) => {
	return (
		<div className="h-auto w-full flex flex-col justify-center items-center space-y-10 mb-[8vh] md:mb-0">
			<div className="w-10/12 md:w-3/4 flex flex-col md:flex-row min-h-[30vh]">
				<div className="flex-grow p-8 space-y-6 font-normal">
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ ease: "easeInOut", duration: 0.75 }}
					>
						{descriptionpara1}
					</motion.p>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ ease: "easeInOut", duration: 0.75 }}
					>
						{descriptionpara2}
					</motion.p>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ ease: "easeInOut", duration: 0.75 }}
					>
						{descriptionpara3}
					</motion.p>
				</div>
				<div className="flex-grow-0 min-w-[25%] p-8 flex flex-col space-y-10">
					<div className="w-full flex-shrink ">
						<h1 className="font-bold text-sm">Link</h1>
						<motion.a
							className="transition duration-200 ease-in text-sm relative inline-block"
							href={link}
							whileHover="hover"
							initial="rest"
							animate="rest"
						>
							<motion.span
								variants={textVariants}
								transition={{ duration: 1, ease: easeIn }}
							>
								<FaLink className="inline mr-1 pb-1" />
								Visit site
							</motion.span>
							<motion.div
								className="absolute bottom-0 left-0 h-[2px] bg-black"
								variants={underlineVariants}
								transition={{ duration: 0.3, ease: easeIn }}
							/>
						</motion.a>
					</div>
					<div className="w-full">
						<h1 className="font-bold text-sm">Technologies used</h1>
						<div className="flex p-2 gap-2">
							<FramerMagnetic className={""}>{icon1}</FramerMagnetic>
							<FramerMagnetic className={""}>{icon2}</FramerMagnetic>
							<FramerMagnetic className={""}>{icon3}</FramerMagnetic>
							<FramerMagnetic className={""}>{icon4}</FramerMagnetic>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const textVariants = {
	rest: { opacity: "0.5" },
	hover: { opacity: "1" },
};

const underlineVariants = {
	rest: { width: "0%" },
	hover: { width: "100%" },
};

const IMG_PADDING = 0;

const TextParallaxContent = ({
	imgUrl,
	subheading,
	heading,
	children,
}: {
	imgUrl: string;
	subheading: string;
	heading: string;
	children: ReactNode;
}) => {
	return (
		<div
			style={{
				paddingLeft: IMG_PADDING,
				paddingRight: IMG_PADDING,
			}}
		>
			<div className="relative md:h-[150vh]">
				<StickyImage imgUrl={imgUrl} />
				<OverlayCopy heading={heading} subheading={subheading} />
			</div>
			{children}
		</div>
	);
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["end end", "end start"],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
	const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "50px"]);

	return (
		<motion.div
			style={{
				backgroundImage: `url(${imgUrl})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: `calc(100vh - ${IMG_PADDING * 2}px)`,
				top: IMG_PADDING,
				scale,
				borderRadius,
			}}
			ref={targetRef}
			className="sticky z-0 overflow-hidden"
		>
			<motion.div
				className="absolute inset-0 bg-neutral-950/70"
				style={{
					opacity,
				}}
			/>
		</motion.div>
	);
};

const OverlayCopy = ({
	subheading,
	heading,
}: {
	subheading: string;
	heading: string;
}) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
	const yslow = useTransform(scrollYProgress, [0, 1], [50, -50]);
	const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

	return (
		<motion.div
			style={{
				y,
				opacity,
			}}
			ref={targetRef}
			className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
		>
			<p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
				{subheading}
			</p>
			<motion.p
				style={{ y: yslow }}
				className="text-center text-8xl font-bold md:text-9xl font-dahlia"
			>
				{heading}
			</motion.p>
		</motion.div>
	);
};
