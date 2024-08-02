
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";

const About = () => {
  return (
    <>
      <h1 className="text-[#915EFF] text-6xl md:font-bold mb-3 md:font-serif font-bold ml-4">
        Introduction
      </h1>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[50px] text-white ml-4 text-[20px] md:font-serif"
      >Hey there! I'm a passionate web developer with a strong mastery in the MERN stack, dedicated to building scalable and efficient applications. I enjoy solving complex problems and pushing my logical thinking to the limit.

        But coding isn't my only passion - You can find me engrossed in a game of chess, where I love to outmaneuver my opponents and think several moves ahead. Or, I might be out on the cricket field, batting or bowling my way to victory. Whether it's the thrill of competition or the joy of creation, I'm always looking for ways to grow, learn, and push myself to new heights.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;




