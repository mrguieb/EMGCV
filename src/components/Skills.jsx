import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiCanva } from "react-icons/si";
import { TbBrandAdobePremier } from "react-icons/tb";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { SiObsstudio } from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Photoshop", icon: <TbBrandAdobePhotoshop size={50} /> },
    { id: 2, name: "Illustrator", icon:  <TbBrandAdobeIllustrator size={50} /> },
    { id: 3, name: "Premiere Pro", icon:  <TbBrandAdobePremier size={50} /> },
    { id: 4, name: "Canva", icon:<SiCanva size={50} /> },
    { id: 5, name: "Obs",  icon:<SiObsstudio size={50} /> },,
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Smart Omega",
      role: "Part Time Graphic Artist",
      period: "January 2023 - March 2023",
      description:
        "Crafted bold, eye-catching visuals for Smart Omega, from team branding to social media graphics, helping boost fan engagement and online presence.",
      logo: "/assets/SMART.png",
    },
    {
      id: 2,
      company: "MotorAce Candon Branch",
      role: "Part Time Graphic Artist",
      period: "October 2024 - Present",
      description:
        "Designing dynamic visuals for Facebook and promotional flyers, bringing the Motor Ace identity to life and engaging audiences both online and offline.",
      logo: "/assets/motorace.png",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg- p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
