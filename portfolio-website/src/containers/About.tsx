// Importing necessary modules and components
'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

// About component
const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    // Wrapper for the about section with animation
    <Wrapper id="about" {...getSectionAnimation}>
      {/* Main title */}
      <h2 className="heading-secondary" style={{ fontSize: '2.5rem' }}>
        {title}
      </h2>

      {/* Main content */}
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        {/* Text content */}
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, I'm Prateek Sachan, a passionate data enthusiast and machine learning engineer, deeply immersed in the world of analytics and algorithms. Exploring the intricate realms of Data Analytics and Machine Learning, I find my thrill in uncovering insights from data and crafting intelligent solutions. Join me on my journey as I decode patterns, analyze data, and create innovative solutions at the intersection of creativity and code.
          </p>

          <p>
            I am currently dedicated to honing my expertise in data analytics and machine learning, consistently refining my skills to make a meaningful impact. I am enthusiastic about applying my knowledge and actively seeking opportunities to contribute to projects that leverage the power of data to foster innovation. </p>

          {/* List section */}
          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Author image */}
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    // Empty fragment during loading
    <></>
  );
};

// Exporting the About component
export default About;
