import {
  About,
  Contact,
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
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
