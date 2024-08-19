import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
	return (
		<div className="drawer md:drawer-open md:w-fit bg-transparent fixed z-50 opacity-70">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content md:hidden flex flex-col items-end justify-end h-auto p-8">
				{/* Page content here */}
				<label
					htmlFor="my-drawer-2"
					className="btn drawer-button lg:hidden"
				>
					<FiMenu className="text-2xl" />
				</label>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-2"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<div className="min-h-full p-2 pt-8 flex flex-col">
					{/* Sidebar content here */}
					<span className="flex flex-col gap-8 flex-grow items-center">
						<Link
							className="transition ease-out duration-300 hover:opacity-50 hover:scale-105"
							href={"/"}
						>
							<FaGithub className="text-xl" />
						</Link>
						<Link
							className="transition ease-out duration-300 hover:opacity-50 hover:scale-105"
							href={"/"}
						>
							<FaInstagram className="text-xl" />
						</Link>
						<Link
							className="transition ease-out duration-300 hover:opacity-50 hover:scale-105"
							href={"/"}
						>
							<FaLinkedin className="text-xl" />
						</Link>
					</span>
					<span className="flex flex-col gap-20 flex-grow justify-center">
						<Link
							className="transition ease-out duration-300 hover:opacity-50 hover:scale-105"
							href={"/"}
						>
							<p className="text-xs font-medium -rotate-90 ">
								Work
							</p>
						</Link>
						<Link
							className="transition ease-out duration-300 hover:opacity-50 hover:scale-105"
							href={"/"}
						>
							<p className="text-xs font-medium -rotate-90 ">
								Resume
							</p>
						</Link>
						<Link
							className="transition ease-out duration-300 hover:opacity-50 hover:scale-105"
							href={"/"}
						>
							<p className="text-xs font-medium -rotate-90 ">
								Blog
							</p>
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
