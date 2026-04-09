import { SoftwareSkillType } from '@/lib/types';
import { getId } from '@/lib/utils/helper';
import { SkillIcon } from '@/components';
import { motion, MotionProps } from 'framer-motion';

type Props = {
  title: string;
  points: string[];
  skills: SoftwareSkillType[];
  className?: string;
} & MotionProps;

const Skill = ({ title, skills, points, className = '', ...rest }: Props) => {
  return (
    <motion.div
      className={`flex flex-col lg:flex-row gap-8 items-start ${className}`}
      {...rest}
    >
      {/* Left: Title + points */}
      <div className="lg:w-2/5 space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold capitalize text-dark-1 relative inline-block">
          {title}
          <div className="absolute -bottom-1 left-0 h-[3px] w-12 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"></div>
        </h3>
        <ul className="space-y-3 pt-2">
          {points.map((point) => (
            <li key={getId()} className="flex items-start gap-3 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
              <span className="text-accent mt-1 flex-shrink-0 text-xs">▹</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Skill icons grid */}
      <div className="lg:w-3/5">
        <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm shadow-sm">
          <div className="flex flex-wrap gap-3 justify-start">
            {skills.map(({ name, icon }) => (
              <SkillIcon key={getId()} src={icon} name={name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
