import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {}

function ExperienceCard({}: Props): ReactElement {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://pbs.twimg.com/profile_images/1438916922934890497/7E6ylOr1_400x400.jpg"
        alt="GTRI Logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Research Intern</h4>
        <p className="font-bold text-2xl mt-1">
          Georgia Tech Research Institute
        </p>
        <div className="flex space-x-4 my-2">
          {/* Tech Used */}
          <Image
            className="h-10 w-10 rounded full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
            alt="Visual Studio Code"
            width={64}
            height={64}
          />

          <Image
            className="h-10 w-10 rounded full"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
            alt="HTML"
            width={64}
            height={64}
          />

          <Image
            className="h-10 w-10 rounded full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
            alt="Tailwind CSS"
            width={64}
            height={64}
          />

          <Image
            className="h-10 w-10 rounded full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            alt="TypeScript"
            width={64}
            height={64}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">October 2022 - Present</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
