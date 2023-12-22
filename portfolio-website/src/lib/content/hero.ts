import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Prateek Sachan.',
    tagline: 'Data Enthusiast | Machine Learning Engineer',
    description: `Hello, I'm a dedicated tech enthusiast with expertise in Front-End web development, 
    Data Analytics, Machine Learning, and Deep Learning. Proficient in HTML, CSS, and JavaScript, 
    I specialize in creating seamless user experiences. My innovative approach and diverse skill set 
    enable me to excel across various domains. Explore my portfolio to discover cutting-edge solutions
    for your projects.`,
    specialText: 'Currently available for a job & freelance',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};
