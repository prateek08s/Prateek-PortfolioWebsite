'use client';
import { Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';
import { motion } from 'framer-motion';

const courses = [
  'Data Structures & Algorithms',
  'Artificial Intelligence',
  'Software Engineering Principles',
  'Object Oriented Programming',
  'Database Management Systems',
  'Machine Learning',
];

const Education = () => {
  return (
    <Wrapper id="education" {...getSectionAnimation}>
      <div className="mb-8">
        <p className="font-mono text-sm text-accent mb-2">Background</p>
        <h2 className="heading-secondary !mb-0">Education</h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 mt-4"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row gap-8 items-start"
      >
        {/* Left: Institution */}
        <div className="md:w-2/5 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-sky-500/20 flex-shrink-0">
              V
            </div>
            <div>
              <h3 className="font-bold text-dark-1 text-lg leading-tight">Vellore Institute of Technology</h3>
              <p className="text-accent font-mono text-sm">VIT · Vellore, India</p>
            </div>
          </div>
          <div className="pl-0 space-y-1 pt-2">
            <p className="text-base font-semibold text-dark-2">M.Tech Integrated Computer Science</p>
            <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
              M.Tech · Integrated Programme
            </span>
          </div>
        </div>

        {/* Right: Courses */}
        <div className="md:w-3/5">
          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm shadow-sm">
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Relevant Coursework</p>
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => (
                <span
                  key={course}
                  className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600/50 font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Education;
