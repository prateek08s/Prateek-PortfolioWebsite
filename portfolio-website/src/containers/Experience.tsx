'use client';
// use client

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';
import React from 'react';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="relative max-w-6xl py-16 mx-auto bg-transparent text-gray-800 dark:text-white"
      {...getSectionAnimation}
    >
      <div className="text-center mb-8 relative z-10">
        <motion.h2
          className="text-5xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {experienceSection.title}
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Explore my journey through experiences in a modern and dynamic design.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {experienceSection.experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md p-6 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <h3 className="text-xl font-bold mb-2 text-teal-500">
              {experience.company}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              {experience.started.toString()} - {experience.upto.toString()}
            </p>
            <ul className="list-disc ml-6 mb-4">
              {experience.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="mb-2 leading-relaxed">
                  {task}
                </li>
              ))}
            </ul>
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 dark:text-indigo-400 hover:underline block"
            >
              Learn more
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;

