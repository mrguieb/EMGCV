import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img 
  src="/assets/emg vs the world.png" 
  alt="About Me Illustration" 
  style={{ width: '100%', height: 'auto', maxWidth: '500px' }} 
/>
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I’m a passionate graphic artist with hands-on experience creating visuals for professional esports teams and automotive brands. From designing social media graphics to promotional flyers and branding materials, I bring ideas to life with creativity and precision.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I thrive on crafting visuals that engage audiences, elevate brands, and leave a lasting impact. Always eager to explore new design trends and push creative boundaries.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Outside of design, I enjoy sharing insights on web, Watching fellow creatives on Youtube and other platforms, and following the journey of early-stage startups.
        </p>
      </motion.div>
    </div>
  );
}
