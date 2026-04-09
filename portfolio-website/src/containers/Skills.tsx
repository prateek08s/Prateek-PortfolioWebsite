'use client';
import { skillsSection } from '@/lib/content/skills';
import { Skill, Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';

const Skills = () => {
  const { title, skills } = skillsSection;

  return (
    <Wrapper id="skills" className="flex flex-col" {...getSectionAnimation}>
      <div className="mb-8">
        <p className="font-mono text-sm text-accent mb-2">Expertise</p>
        <h2 className="heading-secondary !mb-0">{title}</h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 mt-4"></div>
      </div>

      <div className="space-y-16">
        {skills.map(({ id, softwareSkills, points, title }) => (
          <Skill
            key={id}
            skills={softwareSkills}
            points={points}
            title={title}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
