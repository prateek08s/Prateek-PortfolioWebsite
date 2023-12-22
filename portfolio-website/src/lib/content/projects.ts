import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';


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
        tags: ['Sql', 'Tableau','Excel'],
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