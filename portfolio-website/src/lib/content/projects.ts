import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
    title: 'my projects',
    projects: [
        {
            id: getId(),
            name: 'COGNISIGHT',
            url: 'https://github.com/prateek08s',
            repo: 'https://github.com/prateek08s',
            img: '/deep_learningcover.jpg',
            year: 2023,
            tags: ['Python', 'TensorFlow', 'CNN', 'RNN', 'Flask'],
        },
        {
            id: getId(),
            name: 'Road Accident Analysis',
            url: 'https://public.tableau.com/app/profile/prateek.sachan/viz/RoadAccidentDashboard_16875018694120/Dashboard1',
            repo: 'https://github.com/prateek08s/Road-Accident-Analytics',
            img: '/dashboard_poster.png',
            year: 2023,
            tags: ['SQL', 'Tableau', 'Flask', 'Bootstrap'],
        },
        {
            id: getId(),
            name: 'ZAYKAA — Angular',
            url: 'https://github.com/prateek08s/ZAYKAA-ANGULAR',
            repo: 'https://github.com/prateek08s/ZAYKAA-ANGULAR',
            img: '/zaykaa_angular.jpg',
            year: 2023,
            tags: ['Angular', 'HTML', 'CSS', 'JavaScript'],
        },
        {
            id: getId(),
            name: 'Netflix Analytics Dashboard',
            url: 'https://public.tableau.com/app/profile/prateek.sachan/viz/Netflix_16854430467060/Netflix',
            repo: 'https://github.com/prateek08s/Data-Analytics-Project',
            img: '/netflix_dashboard.png',
            year: 2023,
            tags: ['SQL', 'Tableau', 'Excel'],
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
            name: 'ZAYKAA — Food Ordering',
            url: 'https://github.com/prateek08s/Zaykaa',
            repo: 'https://github.com/prateek08s/Zaykaa',
            img: '/zaykaa_poster.png',
            year: 2022,
            tags: ['HTML', 'CSS', 'JavaScript'],
        },
    ],
};
