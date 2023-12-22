// skills.ts
import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

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
























