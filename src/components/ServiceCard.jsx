import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
  <a
    href={link} // Set the href to the link
    target="_blank" // Open link in a new tab
    rel="noopener noreferrer" // Security measure
    className="w-full rounded-[20px] shadow-card bg-[#0e0f0f] ml-14 border-r-4 cursor-pointer"
    style={{ borderColor: "red", borderWidth: "4px", height: "320px", width: "300px", margin: "14px", display: 'block' }}
  >
    <Tilt options={{ max: 45 }}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="h-full flex flex-col"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  </a>
);

export default ServiceCard;
