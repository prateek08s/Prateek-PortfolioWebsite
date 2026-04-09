import {
  About,
  Certifications,
  Contact,
  Education,
  Experience,
  Hero,
  Layout,
  Projects,
  Skills,
} from '@/containers';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
