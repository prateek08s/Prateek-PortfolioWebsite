// Import necessary modules and components
'use client';
import { skillsSection } from '@/lib/content/skills';

import { Skill, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { FaAtom } from 'react-icons/fa'; // Example: Replace with your preferred icon library

const Skills = () => {
  // Destructure data from skillsSection
  const { title, skills } = skillsSection;

  return (
    <Wrapper id="skills" className="flex flex-col items-center justify-center" {...getSectionAnimation}>
      <h2 className="heading-secondary text-3xl md:text-4xl lg:text-5xl">{title}</h2> {/* Adjusted font size */}

      <div className="mt-8 space-y-16">
        {skills.map(({ id, softwareSkills, points, title }) => (
          <Skill
            key={id}
            className="odd:lg:flex-row-reverse"
            skills={softwareSkills}
            points={points}
            title={title}
            {...getSectionAnimation}
          >
            {/* Display Atom Icons for each skill */}
            <div className="flex space-x-2 mt-4">
              {softwareSkills.map(({ name, icon }) => (
                <FaAtom key={name} className="text-xl" />
              ))}
            </div>
          </Skill>
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
