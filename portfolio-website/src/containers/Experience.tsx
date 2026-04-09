'use client';

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="relative max-w-5xl py-12 md:py-16 mx-auto px-4"
      {...getSectionAnimation}
    >
      <div className="mb-8">
        <p className="font-mono text-sm text-accent mb-2">Career Path</p>
        <h2 className="heading-secondary !mb-0">
          {experienceSection.title}
        </h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 mt-4"></div>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/60 via-indigo-500/30 to-transparent hidden md:block ml-6"></div>

        <div className="space-y-8">
          {experienceSection.experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative flex gap-8 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-bg-secondary border-2 border-accent items-center justify-center z-10 shadow-md group-hover:bg-accent transition-colors duration-300">
                <span className="text-accent group-hover:text-white font-bold text-sm transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Card */}
              <div className="flex-1 card-glass rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 border-l-2 border-l-accent/40 hover:border-l-accent">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-dark-1 group-hover:text-accent transition-colors duration-200">
                      {experience.company}
                    </h3>
                    {experience.role && (
                      <p className="text-sm text-accent font-mono mt-0.5">
                        {experience.role}
                      </p>
                    )}
                  </div>
                  <span className="flex-shrink-0 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/60 px-3 py-1.5 rounded-full self-start">
                    {experience.started.toString()} – {experience.upto.toString()}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {experience.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                      <span className="text-accent mt-1.5 flex-shrink-0 text-xs">▹</span>
                      {task}
                    </li>
                  ))}
                </ul>

                {experience.companyUrl && <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline underline-offset-4 transition-all"
                >
                  View Certificate / Project
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
