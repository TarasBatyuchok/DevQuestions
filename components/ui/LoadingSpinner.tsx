"use client";

import { motion } from "framer-motion";

const LoadingSpinner = () => {
	return (
		<div className='min-h-screen  from-gray-700 via-gray-650 to-gray-700 flex items-center justify-center relative overflow-hidden'>
			{/* Simple Loading Spinner */}
			<motion.div
				className='w-8 h-8 border-2 border-slate-700 border-t-indigo-400 rounded-full'
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
			/>
		</div>
	);
};

export default LoadingSpinner;