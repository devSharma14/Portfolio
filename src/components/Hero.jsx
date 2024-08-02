import { Styles } from "../Styles";
import { motion } from "framer-motion";

import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${Styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 via-violet-700 bg-[#915EFF]' />
        </div>


        <div>
          <h1 className={` text-white text-[50px]`}>
            <span style={{ fontFamily: 'Roboto, sans-serif' }}>Hi, I'm</span>
            <span
              className='text-[#915EFF] block text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight'
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Dev Sharma
            </span>
          </h1>
          {/* Hi, I’m Dev Sharma – crafting code into innovative solutions. As a web developer and programmer, I turn ideas into reality with precision and passion. */}
          <p className={`${Styles.heroSubText} mt-2 text-white-100`}>
            As a web developer and programmer,<br className='sm:block hidden' />
            I turn ideas into reality with precision and passion.
          </p>
        </div>

      </div>


    </section>
  );
};

export default Hero;