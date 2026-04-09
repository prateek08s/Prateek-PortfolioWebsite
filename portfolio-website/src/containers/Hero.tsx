'use client';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';
import { Button, Wrapper } from '@/components';
import { slideUp } from '@/styles/animations';
import { motion } from 'framer-motion';

const stats = [
  { value: '1+', label: 'Year @ AMD' },
  { value: '6+', label: 'Projects' },
  { value: '15+', label: 'Technologies' },
  { value: 'VIT', label: 'M.Tech CS' },
];

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } = heroSection;
  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_DELAY = windowWidth <= md ? 0.9 : 1.7;
  const delay = (i: number) => DEFAULT_DELAY + 0.15 * i;

  return (
    <Wrapper
      id="hero"
      className="flex flex-col justify-center h-full min-h-screen gap-5 mt-12 xs:mt-0"
    >
      {/* Subtitle */}
      <motion.p
        variants={slideUp({ delay: delay(0) })}
        initial="hidden"
        animate="show"
        className="font-mono text-sm text-accent"
      >
        {subtitle}
      </motion.p>

      {/* Name */}
      <motion.h1
        variants={slideUp({ delay: delay(1) })}
        initial="hidden"
        animate="show"
        className="text-5xl md:text-8xl font-bold tracking-tighter gradient-text capitalize leading-[1.05]"
      >
        {title}
      </motion.h1>

      {/* Role badge */}
      <motion.div
        variants={slideUp({ delay: delay(2) })}
        initial="hidden"
        animate="show"
        className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
        <span className="text-sm md:text-base font-mono font-medium text-slate-700 dark:text-slate-200 tracking-wide">
          {tagline}
        </span>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={slideUp({ delay: delay(3) })}
        initial="hidden"
        animate="show"
        className="max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-justify"
      >
        {description}
      </motion.p>

      {/* Open-to badge */}
      <motion.div
        variants={slideUp({ delay: delay(4) })}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <p className="font-mono text-xs md:text-sm text-emerald-600 dark:text-emerald-400">
          {specialText}
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        variants={slideUp({ delay: delay(5) })}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center gap-4 mt-1"
      >
        {cta && (
          <Button size="lg" type="link" href={cta.url ?? '#'} sameTab={cta.sameTab}>
            {cta.title}
          </Button>
        )}
        <a
          href="#contact"
          className="font-mono text-sm text-accent border border-accent/40 px-5 py-2.5 rounded hover:bg-accent/10 transition-all duration-200"
        >
          Get in touch
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={slideUp({ delay: delay(6) })}
        initial="hidden"
        animate="show"
        className="mt-4 pt-6 border-t border-slate-200 dark:border-slate-700/60"
      >
        <div className="grid grid-cols-4 gap-4 max-w-lg">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center p-3 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40">
              <span className="text-2xl md:text-3xl font-bold text-dark-1 font-mono leading-none">{value}</span>
              <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Hero;
