import { Icon } from '@iconify/react';

type Props = {
  src: string;
  name: string;
};

const SkillIcon = ({ src, name }: Props) => {
  return (
    <div className="relative group flex flex-col items-center gap-1.5">
      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-slate-50 dark:bg-slate-700/70 border border-slate-200 dark:border-slate-600/50 flex items-center justify-center shadow-sm hover:shadow-md hover:border-accent/50 hover:-translate-y-1 transition-all duration-200">
        <Icon icon={src} width="28" height="28" />
      </div>
      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 text-center leading-tight max-w-[56px] truncate">
        {name}
      </span>
      {/* Tooltip */}
      <div className="absolute invisible opacity-0 group-hover:opacity-100 group-hover:visible px-2.5 py-1.5 text-xs font-medium text-white capitalize rounded-lg bg-slate-900 dark:bg-slate-700 -top-9 whitespace-nowrap transition-all duration-150 z-10">
        {name}
        <svg className="absolute left-1/2 -translate-x-1/2 w-3 h-2 text-slate-900 dark:text-slate-700 top-full" viewBox="0 0 255 255">
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default SkillIcon;
