<<<<<<< HEAD
import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Tech from "@/components/Tech";

interface Props {}

function Skills({}: Props): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text0center md:text-left 
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
      </div>
    </motion.div>
  );
}

export default Skills;
=======
import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Tech from "@/components/Tech";

interface Props {}

function Skills({}: Props): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text0center md:text-left 
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
      </div>
    </motion.div>
  );
}

export default Skills;
>>>>>>> 8467b6d874fe9f14da027d17c00acef642b7c469
