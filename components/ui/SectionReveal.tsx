"use client";

import { motion } from "framer-motion";

export default function SectionReveal({children}:{children:React.ReactNode}){
 return <motion.section initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.7}}>{children}</motion.section>;
}
