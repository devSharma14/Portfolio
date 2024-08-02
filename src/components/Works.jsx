import { Tilt } from "react-tilt";
import { Styles } from "../Styles";
import { motion } from "framer-motion";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }} // Simple pop-up effect on hover
            whileTap={{ scale: 0.95 }}
            className="bg-[#393e42] p-6 rounded-2xl sm:w-[550px] w-full cursor-pointer" // Increased width
        >
            <a
                href={source_code_link} // Set the href to the source code link
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security measure
                className="block w-full h-full" // Ensure the link covers the whole card
            >
                <div className="relative w-full h-[400px]"> {/* Increased height */}
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[32px]">{name}</h3>
                    <p className="mt-2 text-[20px] text-white">{description}</p>
                </div>
{/* 
                <div className="mt-5 flex items-center">
                    <p className="text-white text-[16px] mr-2">Source Code:</p>
                    <a
                        href={source_code_link} // Set the href to the source code link
                        target="_blank" // Open link in a new tab
                        rel="noopener noreferrer" // Security measure
                        className="black-gradient w-12 h-12 rounded-full flex justify-center items-center" // Slightly larger GitHub icon
                    >
                        <img
                            src={github}
                            alt="github"
                            className="w-3/4 h-3/4 object-contain filter invert"
                        />
                    </a>
                </div> */}
            </a>
        </motion.div>
    );
};




const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h1 className="text-[#915EFF] text-6xl font-bold mb-3 font-serif ml-4">
                    Projects
                </h1>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-white text-[20px] max-w-3xl leading-[30px] ml-4 font-serif"
                >
                    The following projects showcase my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos. They reflect my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className="mt-20 flex justify-center flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default Works;
