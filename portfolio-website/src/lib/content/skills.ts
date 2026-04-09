import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'AI Agents & LLM Systems',
      points: [
        'Building intelligent AI agents with MCP integrations wired into chatbots for natural language querying of engineering knowledge',
        'Designing LLM-powered automation pipelines that replace repetitive manual workflows with self-driving, context-aware solutions',
        'Developing multi-step agentic workflows using LangChain and LangGraph for complex reasoning and tool-use tasks',
      ],
      softwareSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'LangChain', icon: 'simple-icons:langchain' },
        { name: 'MCP', icon: 'simple-icons:anthropic' },
        { name: 'FastAPI', icon: 'simple-icons:fastapi' },
        { name: 'Flask', icon: 'simple-icons:flask' },
        { name: 'Streamlit', icon: 'simple-icons:streamlit' },
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'Git', icon: 'vscode-icons:file-type-git' },
      ],
    },
    {
      id: getId(),
      title: 'ML & Deep Learning',
      points: [
        'Training and deploying ML models for test case prediction, classification, and QA validation, reducing manual planning overhead at scale',
        'Building deep learning systems using CNN and RNN architectures for computer vision and NLP applications',
        'End-to-end model development: data preprocessing, feature engineering, training, evaluation, and production deployment',
      ],
      softwareSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'PyTorch', icon: 'logos:pytorch-icon' },
        { name: 'TensorFlow', icon: 'logos:tensorflow' },
        { name: 'Scikit-learn', icon: 'simple-icons:scikitlearn' },
        { name: 'Keras', icon: 'simple-icons:keras' },
        { name: 'Pandas', icon: 'simple-icons:pandas' },
        { name: 'NumPy', icon: 'simple-icons:numpy' },
        { name: 'Jupyter', icon: 'simple-icons:jupyter' },
        { name: 'Google Colab', icon: 'simple-icons:googlecolab' },
      ],
    },
    {
      id: getId(),
      title: 'Full-Stack Engineering',
      points: [
        'Building responsive, production-grade internal tools and web interfaces with React, Next.js, and TypeScript',
        'Designing and developing RESTful APIs and backend services using Flask, FastAPI, and Node.js',
        'Creating clean, accessible UI with Tailwind CSS and Figma, optimized for engineering and executive users',
      ],
      softwareSkills: [
        { name: 'ReactJS', icon: 'logos:react' },
        { name: 'Next.js', icon: 'logos:nextjs-icon' },
        { name: 'TypeScript', icon: 'logos:typescript-icon' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'Figma', icon: 'logos:figma' },
      ],
    },
    {
      id: getId(),
      title: 'Data & Analytics',
      points: [
        'Architecting context-rich dashboards using Tableau, Power BI, Streamlit, and React with Flask and FastAPI backends, giving leads and executives correlated, real-time QA insights at a single place',
        'Building full-stack data applications with HTML, CSS, and JavaScript for interactive, browser-based reporting and visualization interfaces',
        'Writing complex SQL queries, managing large-scale databases on MySQL and Snowflake, and transforming raw validation data into structured, actionable intelligence for engineering decision-making',
      ],
      softwareSkills: [
        { name: 'Tableau', icon: 'simple-icons:tableau' },
        { name: 'Power BI', icon: 'simple-icons:powerbi' },
        { name: 'Streamlit', icon: 'simple-icons:streamlit' },
        { name: 'ReactJS', icon: 'logos:react' },
        { name: 'Flask', icon: 'simple-icons:flask' },
        { name: 'FastAPI', icon: 'simple-icons:fastapi' },
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'MySQL', icon: 'logos:mysql' },
        { name: 'Snowflake', icon: 'simple-icons:snowflake' },
        { name: 'Pandas', icon: 'simple-icons:pandas' },
        { name: 'Excel', icon: 'vscode-icons:file-type-excel' },
      ],
    },
  ],
};
