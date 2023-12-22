import { Icon } from '@iconify/react';

type Props = {
  src: string;
  name: string;
};

const SkillIcon = ({ src, name }: Props) => {
  return (
    <div className="relative grid text-4xl rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-900 dark:shadow-xl h-16 w-16 sm:h-20 sm:w-20 place-items-center group overflow-hidden">
      <Icon icon={src} width="40" height="40" style={{ filter: 'brightness(1.2) contrast(1.5) saturate(1.2)', fill: '#FFD700' }} />
      <div className="absolute invisible px-4 py-2 text-base font-semibold text-white capitalize duration-200 rounded-full opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-10 bg-slate-900/75 dark:bg-slate-700/90 dark:text-slate-100">
        {name}
        <svg
          className="absolute left-0 w-full h-2 text-slate-900/75 dark:text-slate-700/90 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default SkillIcon;
