// Import necessary modules and components
'use client';
import { projectsSection } from '@/lib/content/projects';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { sortByYear } from '@/lib/utils/helper';

import { Button, ProjectCard, Wrapper } from '@/components';

import { getSectionAnimation, projectVariants } from '@/styles/animations';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectsProps { }

const Projects: React.FC<ProjectsProps> = () => {
  const { projects, title } = projectsSection;
  const [showMore, setShowMore] = useState(false);
  const topProjects = projects.slice(0, PROJECTS_INITIALLY);

  const visibleProjects = showMore ? projects : topProjects;

  return (
    <Wrapper id="projects" animate={false} {...getSectionAnimation}>
      <motion.h2
        className={`text-5xl font-extrabold text-center mb-8 ${
          // Use conditional class based on theme
          'text-black dark:text-white' 
          }`}
      >
        {title}
      </motion.h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {sortByYear(visibleProjects).map((project, i) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            variants={projectVariants}
            initial="hidden"
            animate="show"
            custom={i}
            whileHover={{ y: -5 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
      {projects.length > PROJECTS_INITIALLY && (
        <Button
          className="mt-8 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:opacity-90 transition duration-300"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'Show Less' : 'Show More Projects'}
        </Button>
      )}
    </Wrapper>
  );
};

export default Projects;
