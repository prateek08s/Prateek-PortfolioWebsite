import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Prateek Sachan.',
    tagline: 'Software System Designer II @ AMD',
    description: `I build AI-powered internal tools that automate engineering workflows. ML prediction models, intelligent agents, MCP integrations, and data dashboards that turn complex validation data into decisions.`,
    specialText: 'Open to collaborations & interesting problems',
    cta: {
        title: 'View Resume',
        url: `/${resumeFileName}`,
        hideInDesktop: false,
    },
};
