'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';
import { AuthorImage, ListItem, Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';
import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => { setDomLoaded(true); }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <div className="mb-8">
        <p className="font-mono text-sm text-accent mb-2">Introduction</p>
        <h2 className="heading-secondary !mb-0">{title}</h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 mt-4"></div>
      </div>

      <main className="flex flex-col items-center gap-12 lg:items-start lg:flex-row">
        {/* Text */}
        <div className="space-y-5 lg:w-3/5">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
            Hey, I'm <span className="text-accent font-semibold">Prateek Sachan</span>, a Software System Designer II at{' '}
            <span className="text-red-500 font-semibold">AMD</span>, Hyderabad, embedded within the Software QA organization where I design and ship intelligent, production-grade internal tools that directly power GPU/APU QA validation workflows.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
            My work sits at the intersection of AI and developer tooling. I build systems that matter: ML-driven test case prediction models that reduce manual planning overhead, AI-powered agents and MCP integrations wired into chatbots so engineers can query QA knowledge through natural language, and end-to-end automation pipelines that replace repetitive validation workflows with intelligent, self-driving solutions.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
            On the data side, I architect context-rich dashboards that surface correlated, real-time QA insights, giving leads and executives a single pane of glass to make faster, evidence-backed decisions. Everything I build is designed to close the gap between raw validation data and actionable engineering intelligence.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
            Outside of engineering, I was part of the Publicity &amp; Marketing Team for Riviera, the largest cultural festival in South India. In 2023, I served as a coordinator, managing international student delegations, guest logistics, and cross-university outreach. By 2024, I stepped up as an organizer, leading flagship events like Infusion and Desh Mein Videsh, directing the International Parade, and overseeing hospitality for participants from 25+ countries. I bring the same ownership and precision to everything I build.
          </p>

          {list && (
            <div className="pt-2">
              <p className="text-sm font-semibold text-dark-2 mb-3">{list.title}</p>
              <ul className="grid w-full grid-cols-2 gap-1.5 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end lg:w-2/5">
          <AuthorImage src={img} alt={author.name} />
        </div>
      </main>
    </Wrapper>
  ) : <></>;
};

export default About;
