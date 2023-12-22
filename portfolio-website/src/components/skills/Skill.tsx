// Import necessary modules and components
import { SoftwareSkillType } from '@/lib/types';
import { getId } from '@/lib/utils/helper';

import { ListItem, SkillIcon } from '@/components';

import { motion, MotionProps } from 'framer-motion';

type Props = {
  title: string;
  points: string[];
  skills: SoftwareSkillType[];
  className?: string;
} & MotionProps;

const Skill = ({
  title,
  skills,
  points,
  className = '',
  ...rest
}: Props) => {
  return (
    <motion.div
      className={`flex flex-col items-center p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg text-white ${className}`}
      {...rest}
    >
      {/* Left */}
      <div className="space-y-6 text-center">
        <h3 className="mb-3 text-3xl font-bold capitalize sm:text-4xl"> {/* Adjusted font size */}
          {title}
        </h3>

        <div key={getId()} className="flex flex-wrap justify-center gap-4">
          {skills.map(({ name, icon }) => (
            <SkillIcon key={getId()} src={icon} name={name} />
          ))}
        </div>

        <ul className="space-y-2">
          {points.map((point) => (
            <ListItem key={getId()}>{point}</ListItem>
          ))}
        </ul>
      </div>
      {/* No Lottie animation here */}
    </motion.div>
  );
};

export default Skill;
