'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[350px] group">
      <button
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) return;
          window.open(url);
        }}
        className="block w-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 bg-bg-secondary border border-slate-200/60 dark:border-slate-700/50"
      >
        {/* Image container */}
        <div className="overflow-hidden h-[200px] relative">
          <Image
            src={img}
            alt={name}
            width={350}
            height={200}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          {/* Year badge */}
          <div className="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-sm text-white text-xs font-mono px-2 py-1 rounded-full">
            {year}
          </div>
          {/* Hover overlay with links */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 gap-2">
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-accent backdrop-blur-sm rounded-full text-white transition-all duration-200"
              title="View Repository"
            >
              <Icon icon="tabler:brand-github" width={18} height={18} />
            </a>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-accent backdrop-blur-sm rounded-full text-white transition-all duration-200"
              title="View Live"
            >
              <Icon icon="ci:external-link" width={18} height={18} />
            </a>
          </div>
        </div>

        {/* Card body */}
        <div className="p-4 space-y-2 text-left">
          <h4 className="font-semibold capitalize text-dark-1 group-hover:text-accent transition-colors duration-200">
            {name}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="tag-badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </button>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
