import type { Lang } from '../i18n/lang';
import { en } from './en';
import { nl } from './nl';

export type Work = {
    title: string;
    period: string;
    summary: string;
    details: string[];
    tags: string[];
};

export type Role = {
    company: string;
    location: string;
    title: string;
    period: string;
    summary: string;
    details: string[];
};

export type SectionId = 'work' | 'ai' | 'experience' | 'skills';

export type Cv = {
    languageName: string;
    labels: {
        skipLink: string;
        introduction: string;
        sections: string;
        focusAreas: string;
        topics: string;
        education: string;
        languages: string;
        darkMode: string;
        lightMode: string;
    };
    sections: Record<SectionId, { nav: string; title: string }>;
    name: string;
    role: string;
    location: string;
    pitch: string;
    intro: string;
    email: string;
    links: { label: string; href: string }[];
    focus: { title: string; body: string }[];
    work: Work[];
    ai: { intro: string; practices: { title: string; body: string }[] };
    roles: Role[];
    skills: { group: string; items: string[] }[];
    education: { school: string; degree: string; period: string }[];
    languages: string[];
};

export const cvs: Record<Lang, Cv> = { en, nl };
