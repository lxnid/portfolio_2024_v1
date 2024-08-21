import Link from "next/link";
import React from "react";
import { FaGithub, FaPlay } from "react-icons/fa6";
import FramerMagnetic from "@/app/components/framerMagnetic";
import { motion } from "framer-motion";
import { SiAdobecreativecloud, SiNotion } from "react-icons/si";
import AdobeIcon from "@/public/adobe-creative-cloud.svg";
import NextIcon from "@/public/next.js.svg";

const MyStory = () => {
	return (
		<section
			id="sectionStory"
			className="w-full min-h-screen flex justify-center items-center opacity-[99%]"
		>
			<div className="w-10/12 md:w-[90%] lg:w-[70%] md:h-[80vh]">
				<div className="flex flex-col gap-6 w-full h-full justify-center items-center">
					<div className="flex flex-col md:flex-row gap-6 items-center">
						<FramerMagnetic className={"w-full md:w-fit"}>
							<motion.div
								initial={{ y: 48, opacity: 0 }}
								whileInView={{ y: 0, opacity: 0.99 }}
								transition={{
									ease: "easeInOut",
									duration: 0.75,
								}}
								viewport={{ once: false, amount: 0.5 }}
								className="cardCustom w-full h-full md:min-h-[25vh] flex-grow md:flex-shrink p-10 rounded-3xl bg-[#7e6a6a7e] flex justify-center items-center font-bold text-[100px]"
							>
								Me.
							</motion.div>
						</FramerMagnetic>
						<FramerMagnetic className={""}>
							<motion.div
								initial={{ y: 48, opacity: 0 }}
								whileInView={{ y: 0, opacity: 0.99 }}
								transition={{
									ease: "easeInOut",
									duration: 0.75,
								}}
								viewport={{ once: false, amount: 0.5 }}
								className="cardCustom md:col-span-2 h-full cursor-pointer rounded-3xl bg-[#7e6a6a7e] text-[#ffffffc6] p-10 px-[10%] text-xl flex-grow flex justify-center items-center"
							>
								Extensive experience and the deep understanding
								of the field, fuels my passion for exploring wonders of the tech world. I thrive on
								transforming complex challenges into
								elegant, user-centric solutions.
							</motion.div>
						</FramerMagnetic>
					</div>
					<div className="flex flex-col md:flex-row gap-6 items-center">
						<FramerMagnetic className={""}>
							<motion.div
								initial={{ y: 48, opacity: 0 }}
								whileInView={{ y: 0, opacity: 0.99 }}
								transition={{
									ease: "easeInOut",
									duration: 0.75,
								}}
								viewport={{ once: false, amount: 0.5 }}
								className="cardCustom md:col-span-2 h-full cursor-pointer md:min-h-[25vh] rounded-3xl bg-[#7e6a6a7e] text-[#ffffffc6] p-10 px-[10%] text-xl flex-grow flex justify-center items-center"
							>
								....into the bargain’ I’m a great musician and I
								enjoy music even when I’m working, which helps
								me to focus and concentrate on my work. Check
								out my work music playlist on Spotify.
							</motion.div>
						</FramerMagnetic>
						<div className="min-w-[30%] w-full h-full flex-grow">
							<FramerMagnetic
								className={"w-full min-h-[20vh] md:min-h-fit"}
							>
								<motion.div
									initial={{ y: 48, opacity: 0 }}
									whileInView={{ y: 0, opacity: 0.99 }}
									transition={{
										ease: "easeInOut",
										duration: 0.75,
									}}
									viewport={{ once: false, amount: 0.5 }}
									style={{
										backgroundImage:
											"url(https://plus.unsplash.com/premium_photo-1664272436668-78437b92929e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
										backgroundSize: "cover",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",
									}}
									className="cardCustom w-full h-full cursor-pointer p-3 rounded-3xl bg-[#7e6a6a7e] flex justify-start items-end font-bold text-[30px]"
								>
									<Link
										href={"https://open.spotify.com/playlist/02kKG4CTFG7wHsBQnLvJpP?si=56021822ba2f472f"}
										target="_"
										className="w-16 h-16 bg-green-500 pl-1 text-black shadow-md rounded-full flex justify-center items-center transition ease-in duration-300 hover:scale-105"
									>
										<FaPlay />
									</Link>
								</motion.div>
							</FramerMagnetic>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[90%] absolute translate-y-[50vh] md:translate-y-[40vh] overflow-hidden ">
				<div className="inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] animate-infinite-scroll">
					<ul
						x-ref="logos"
						className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none"
					>
						<li className="flex gap-3 items-center">
							<span>
								<i className="ci ci-figma ci-2x"></i>
							</span>
							<span className="text-xs font-bold">Figma</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<i className="ci ci-vscode ci-2x"></i>
							</span>
							<span className="text-xs font-bold">vscode</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<FaGithub className="text-3xl" />
							</span>
							<span className="text-xs font-bold">Github</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<i className="ci ci-reactjs ci-2x"></i>
							</span>
							<span className="text-xs font-bold">ReactJS</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<NextIcon />
							</span>
							<span className="text-xs font-bold">NextJS</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<SiNotion className="text-3xl" />
							</span>
							<span className="text-xs font-bold">Notion</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<i className="ci ci-tailwind ci-2x"></i>
							</span>
							<span className="text-xs font-bold">Tailwind</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<AdobeIcon width="30" height="30" />
							</span>
							<span className="text-xs font-bold">AdobeCC</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/fluency/48/bard.png"
									alt="bard"
								/>
							</span>
							<span className="text-xs font-bold">Gemini</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/chatgpt.png"
									alt="chatgpt"
								/>
							</span>
							<span className="text-xs font-bold">Chatgpt</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/git.png"
									alt="git"
								/>
							</span>
							<span className="text-xs font-bold">Git</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/python--v1.png"
									alt="python--v1"
								/>
							</span>
							<span className="text-xs font-bold">Python</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/30/microsoft.png"
									alt="microsoft"
								/>
							</span>
							<span className="text-xs font-bold">Windows</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/linux--v1.png"
									alt="linux--v1"
								/>
							</span>
							<span className="text-xs font-bold">Linux</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/google-cloud.png"
									alt="google-cloud"
								/>
							</span>
							<span className="text-xs font-bold">Gcloud</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/slack-new.png"
									alt="slack-new"
								/>
							</span>
							<span className="text-xs font-bold">Slack</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/html-5--v2.png"
									alt="html-5--v2"
								/>
							</span>
							<span className="text-xs font-bold">HTML</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/css3.png"
									alt="css3"
								/>
							</span>
							<span className="text-xs font-bold">CSS</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/javascript--v1.png"
									alt="javascript--v1"
								/>
							</span>
							<span className="text-xs font-bold">
								Javascript
							</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<i className="ci ci-figma ci-2x"></i>
							</span>
							<span className="text-xs font-bold">Figma</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<i className="ci ci-vscode ci-2x"></i>
							</span>
							<span className="text-xs font-bold">vscode</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<FaGithub className="text-3xl" />
							</span>
							<span className="text-xs font-bold">Github</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<i className="ci ci-reactjs ci-2x"></i>
							</span>
							<span className="text-xs font-bold">ReactJS</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<NextIcon />
							</span>
							<span className="text-xs font-bold">NextJS</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<SiNotion className="text-3xl" />
							</span>
							<span className="text-xs font-bold">Notion</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<i className="ci ci-tailwind ci-2x"></i>
							</span>
							<span className="text-xs font-bold">Tailwind</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<AdobeIcon width="30" height="30" />
							</span>
							<span className="text-xs font-bold">AdobeCC</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/fluency/48/bard.png"
									alt="bard"
								/>
							</span>
							<span className="text-xs font-bold">Gemini</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/chatgpt.png"
									alt="chatgpt"
								/>
							</span>
							<span className="text-xs font-bold">Chatgpt</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/git.png"
									alt="git"
								/>
							</span>
							<span className="text-xs font-bold">Git</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/python--v1.png"
									alt="python--v1"
								/>
							</span>
							<span className="text-xs font-bold">Python</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/30/microsoft.png"
									alt="microsoft"
								/>
							</span>
							<span className="text-xs font-bold">Windows</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/linux--v1.png"
									alt="linux--v1"
								/>
							</span>
							<span className="text-xs font-bold">Linux</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/google-cloud.png"
									alt="google-cloud"
								/>
							</span>
							<span className="text-xs font-bold">Gcloud</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/slack-new.png"
									alt="slack-new"
								/>
							</span>
							<span className="text-xs font-bold">Slack</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/html-5--v2.png"
									alt="html-5--v2"
								/>
							</span>
							<span className="text-xs font-bold">HTML</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/css3.png"
									alt="css3"
								/>
							</span>
							<span className="text-xs font-bold">CSS</span>
						</li>
						<li className="flex gap-3 items-center">
							<span>
								<img
									width="30"
									height="30"
									src="https://img.icons8.com/color/48/javascript--v1.png"
									alt="javascript--v1"
								/>
							</span>
							<span className="text-xs font-bold">
								Javascript
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default MyStory;
