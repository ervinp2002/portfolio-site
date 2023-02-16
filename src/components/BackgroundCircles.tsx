<<<<<<< HEAD
import React, { ReactElement } from "react";
import { motion } from "framer-motion";

interface Props {}

function BackgroundCircles({}: Props): ReactElement {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-amber-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-neutral-700 rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-neutral-700 rounded-full h-[500px] w-[500px] mt-52" />
      <div className="rounded-full border border-amber-400 opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="absolute border border-neutral-700 rounded-full h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
=======
import React, { ReactElement } from "react";
import { motion } from "framer-motion";

interface Props {}

function BackgroundCircles({}: Props): ReactElement {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-amber-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-neutral-700 rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-neutral-700 rounded-full h-[500px] w-[500px] mt-52" />
      <div className="rounded-full border border-amber-400 opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="absolute border border-neutral-700 rounded-full h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
>>>>>>> 8467b6d874fe9f14da027d17c00acef642b7c469
