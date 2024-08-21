"use client";
import React from "react";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";

const fontRal = Raleway({
	subsets: ["latin"],
	weight: "700",
	style: "normal",
	display: "swap",
	preload: true,
});

const About = () => {
	return (
		<ReactLenis root options={{ lerp: 0.05 }}>
			<section
				id="sectionAbout"
				className={`h-auto md:min-h-[80vh] w-full flex flex-col justify-start items-center md:pt-[5vh]`}
			>
				<div className="w-10/12 md:w-3/4 text-wrap text-white">
					<motion.p
						initial={{ y: 48, opacity: 0 }}
						whileInView={{ y: 0, opacity: 0.99 }}
						transition={{ ease: "easeInOut", duration: 0.75 }}
					>
						About me
					</motion.p>
					<motion.h1
						initial={{ y: 48, opacity: 0 }}
						whileInView={{ y: 0, opacity: 0.99 }}
						transition={{ ease: "easeInOut", duration: 1 }}
						className={`${fontRal.className} text-[34px] sm:text-[36px] md:text-[50px] lg:text-[60px] xl:text-[80px] leading-tight sm:leading-none mt-10`}
					>
						Comp. Sci Student based in Colombo,{" "}
						<span className="opacity-45">
							On a quest to harness technology for creative,
							impactful and transformative solutions.
						</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.35 }}
						transition={{ ease: "easeInOut", duration: 0.75 }}
						className="mt-10 xl:w-2/3"
					>
						Lorem ipsum dolor sit amet consectetur. Justo volutpat
						mauris eget sit ut senectus vestibulum. Bibendum sit
						lacus nunc eget a et sed tortor. Dictum est erat
						senectus arcu risus. Tortor lectus donec pellentesque
						amet consectetur tempus. Nulla neque cras sed sagittis
						molestie.
					</motion.p>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.35 }}
						viewport={{ once: false, amount: 0.8 }}
						transition={{ ease: "easeInOut", duration: 0.75 }}
						className="mt-6 xl:w-2/3"
					>
						Dolor amet volutpat hendrerit suscipit eu ullamcorper
						pellentesque purus. Massa nec est tortor risus lacus id
						est libero ullamcorper. Vitae ut suspendisse scelerisque
						purus arcu. Ut donec tristique vitae facilisi feugiat
						gravida id. Sit phasellus at viverra id venenatis amet
						scelerisque magna viverra.
					</motion.p>
				</div>
			</section>
		</ReactLenis>
	);
};

export default About;
