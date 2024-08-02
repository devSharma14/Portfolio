import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Typography } from "@material-tailwind/react";

const Tech = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography
        variant="h2"
        className="text-[#915EFF] font-bold text-center my-8 md: font-serif font-bold text-4xl"
      >
        My Tools and Technologies
      </Typography>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
