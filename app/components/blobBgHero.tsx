import { motion } from "framer-motion";
import React from "react";

const Blob = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 0.8 }}
			transition={{ duration: 1 }}
			className="h-screen flex justify-center items-center z-10"
		>
			<div className="absolute opacity-0 z-0">
				<div className="w-[35vw] h-[30vw] min-h-[430px] min-w-[450px] rounded-full blur-[180px] bg-gradient-to-b from-[#F22FB0] translate-y-[150px]" />
				<div className="w-[35vw] h-[30vw] min-h-[430px] min-w-[450px] rounded-full blur-[180px] bg-gradient-to-b from-[#FF7BCA] to-[#ffbd5ac6] translate-y-[-150px]" />
			</div>
		</motion.div>
	);
};

export default Blob;