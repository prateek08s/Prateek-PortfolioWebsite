import { socialLinks } from '@/lib/content/portfolio';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '@/lib/types/sections';

import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
}

// * Hero Section

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


// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I specialize in:',
    items: [
      'Java',
      'HTML',
      'CSS',
      'JavaScript',
      'C Programming',
      'Data Analytics',
      'Data Visualization (e.g., Tableau)',
      'Data Processing with Python (e.g., Pandas, NumPy)',
      'Database Management (e.g., SQL, MongoDB)',
      'Machine Learning with Python (e.g., Scikit-Learn, TensorFlow)',
      'Deep Learning (e.g., Keras, PyTorch)',
      'UI/UX Design (e.g., Figma)'
    ],
  },
  img: '/prateek-sachan.jpg', // Updated image path with a leading slash
};


// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'frontend developer',
      points: [
        'Building responsive static websites Html, CSS and Javascript',
        'Building responsive Single Page Apps in React.js',
        'Building responsive single Page application using Angular',
      ],
      softwareSkills: [
        { name: 'html', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'angular', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'git', icon: 'vscode-icons:file-type-git' },
        // ... (other existing softwareSkills for frontend development)
      ],
    },
    {
      id: getId(),
      title: 'Data Enthusiast',
      points: [
        'Passionate about exploring and analyzing data',
        'Experience in data visualization and interpretation',
        'Creating Dynamic Tableau Dashboards for an Engaging User Experience',
      ],
      softwareSkills: [
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'data-analytics', icon: 'simple-icons:googleanalytics' },
        { name: 'tableau', icon: 'simple-icons:tableau' },
        { name: 'pandas', icon: 'simple-icons:pandas' },
        { name: 'numpy', icon: 'simple-icons:numpy' },
        { name: 'sql', icon: 'vscode-icons:file-type-sql' },
        { name: 'google-colab', icon: 'simple-icons:googlecolab' },
        { name: 'jupyter', icon: 'simple-icons:jupyter' },
        { name: 'excel', icon: 'vscode-icons:file-type-excel' },
        // ... (additional softwareSkills for data-related tools)
      ],
    },
  ],
};


// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'SmartBridge Externship',
      companyUrl: 'https://github.com/prateek08s/Road-Accident-Analytics',
      role: 'Data Analytics',
      started: 'may 2023',
      upto: 'july 2023',
      tasks: [
        'Engineered an interactive UK road accident tracker with dynamic visualizations, enhancing user engagement and accessibility.',
        'Implemented real-time filters for current year, previous year, and severity, optimizing user experience and data accuracy.',
        'Enabled stakeholders with data-driven insights, leading to strategic decisions for road safety enhancements.',
        'Contributed to evidence-based policy decisions, ensuring a safer road environment and fostering community trust.'
      ],

    },
    {
      company: 'TATA: Forage Virtual Internship',
      companyUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata_y6dcEAZCZnL2izMmr_1689243840470_completion_certificate.pdf',
      role: 'Data Visualization',
      started: 'april 2023',
      upto: 'july 2023',
      tasks: [
        'Framing the Business Scenario',
        'Creating Effective Visuals',
        'Choosing the Right Visuals',
        'Communicating Insights and Analysis',
      ],
    },
    {
      company: 'Microsoft',
      companyUrl: 'https://www.credly.com/badges/ae5cb245-238b-4e32-822a-cbcd7be1072e/linked_in_profile',
      role: 'Microsoft 365 Certified: Fundamentals',
      started: 'may 2023',
      upto: 'july 2023',
      tasks: [
        'Demonstrates foundational knowledge in cloud-based collaboration, productivity, security, and compliance tools.',
        'Validates expertise in Microsoft 365 essentials, showcasing readiness for modern workplace challenges.',
        'Enhances employability, highlighting proficiency in essential business applications and cloud-based solutions.',
        'Globally recognized certification, endorsed by Microsoft, demonstrating competence in fundamental cloud-based technologies.',
      ],
    },
  ],
};
// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Zaykaa',
      url: 'https://github.com/prateek08s/Zaykaa',
      repo: 'https://github.com/prateek08s/Zaykaa',
      img: '/zaykaa_poster.png', // Use leading slash to indicate it's an absolute path
      year: 2022,
      tags: ['CSS', 'Html', 'Javscript']


    },
    {
      id: getId(),
      name: 'Road-Accident-Analytics',
      url: 'https://public.tableau.com/app/profile/prateek.sachan/viz/RoadAccidentDashboard_16875018694120/Dashboard1',
      repo: 'https://github.com/prateek08s/Road-Accident-Analytics',
      img: '/dashboard_poster.png', // Use leading slash to indicate it's an absolute path
      year: 2023,
      tags: ['Sql', 'Tableau']
    },
    {
      id: getId(),
      name: 'ZAYKAA- ANGULAR',
      url: 'https://github.com/prateek08s/ZAYKAA-ANGULAR',
      repo: 'https://github.com/prateek08s/ZAYKAA-ANGULAR',
      img: '/zaykaa_angular.jpg',
      year: 2023,
      tags: ['CSS', 'Html', 'Javscript', 'Angular'],
    },
    {
      id: getId(),
      name: 'Data-Analytics-Project',
      url: 'https://public.tableau.com/app/profile/prateek.sachan/viz/Netflix_16854430467060/Netflix',
      repo: 'https://github.com/prateek08s/Data-Analytics-Project',
      img: '/netflix_dashboard.png',
      year: 2023,
      tags: ['Sql', 'Tableau', 'Excel'],
    },
    {
      id: getId(),
      name: 'ProjectHub',
      url: 'https://github.com/prateek08s/ProjectHub',
      repo: 'https://github.com/prateek08s/ProjectHub',
      img: '/projecthub.png',
      year: 2023,
      tags: ['Python', 'Jupyter Notebook'],
    },
    {
      id: getId(),
      name: 'Deep Learning Project',
      url: 'https://github.com/prateek08s/Deep-Learning',
      repo: 'https://github.com/prateek08s/Deep-Learning',
      img: '/deep_learningcover.jpg',
      year: 2022,
      tags: ['Python', 'Jupyter Notebook'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for a remote job or any new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: 'https://mail.google.com/mail/?view=cm&fs=1&to=prateek.sachan727@gmail.com',
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'cib:leetcode',
      url: socialLinks.leetcode,
    },
    {
      icon: 'ion:code-slash',
      url: socialLinks.gfg,

    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design & Built by Prateek Sachan',

};
