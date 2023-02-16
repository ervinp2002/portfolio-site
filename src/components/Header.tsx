<<<<<<< HEAD
import React, { ReactElement } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.github.com/ervinp2002"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.instagram.com/ervinp2002"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://linkedin.com/in/ervin-pangilinan"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer "
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Contact me
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
=======
import React, { ReactElement } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.github.com/ervinp2002"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.instagram.com/ervinp2002"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://linkedin.com/in/ervin-pangilinan"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer "
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Contact me
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
>>>>>>> 8467b6d874fe9f14da027d17c00acef642b7c469
