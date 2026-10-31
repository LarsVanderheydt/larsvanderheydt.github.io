export type Highlight = {
    title: string;
    period: string;
    challenge: string;
    result: string;
    tags: string[];
};

export type Role = {
    company: string;
    location: string;
    title: string;
    period: string;
    summary: string;
};

export type Fact = { value: string; label: string };

export type Cv = {
    name: string;
    role: string;
    location: string;
    pitch: string;
    email: string;
    github: string;
    facts: Fact[];
    principles: { title: string; body: string }[];
    highlights: Highlight[];
    roles: Role[];
    skills: { level: string; items: string[] }[];
    education: { school: string; degree: string; period: string }[];
    languages: string[];
};

export const cv: Cv = {
    name: 'Lars Vanderheydt',
    role: 'Frontend Platform Engineer',
    location: 'Oslo, Norway',
    pitch: 'I make large frontend codebases faster, safer and easier to work in — for the teams that build on them every day.',
    email: 'lars.vanderheydt@hotmail.com',
    github: 'https://github.com/LarsVanderheydt',
    facts: [
        { value: '8+', label: 'years building for the web' },
        { value: '29', label: 'apps on one shared baseline' },
        { value: '10+', label: 'micro-frontends into one monorepo' },
        { value: '3', label: 'years as tech lead' },
    ],
    principles: [
        {
            title: 'Make the trade-off visible',
            body: 'Explain cost and impact in product terms, then let the business decide.',
        },
        {
            title: 'Raise the baseline, then automate it',
            body: 'Shared configs, lint rules and CI checks so good practice is the default.',
        },
        {
            title: 'Teach so it sticks',
            body: 'Courses, pairing and docs that let teams carry the work forward on their own.',
        },
    ],
    highlights: [
        {
            title: 'Frontend monorepo',
            period: '2025 — now',
            challenge: '10+ micro-frontends, each with its own setup, upgrades and auth handling.',
            result: 'Leading the move to one monorepo with a shared platform layer: feature flags, a shared app shell and unified auth.',
            tags: ['Monorepo', 'Turborepo', 'Architecture'],
        },
        {
            title: 'Playwright stabilisation',
            period: '2026 — now',
            challenge: 'Slow, flaky end-to-end tests in a large monolith held up every team’s pipeline.',
            result: 'Finding and fixing the root causes, then adding guardrails so the same patterns do not return.',
            tags: ['Playwright', 'CI', 'Quality'],
        },
        {
            title: 'Shared tooling library',
            period: '2024',
            challenge: 'Every micro-frontend configured linting, types, builds and tests its own way.',
            result: 'One shared ESLint, TypeScript, Vite, Vitest and Playwright config library adopted across all micro-frontends.',
            tags: ['Tooling', 'DX', 'Standards'],
        },
        {
            title: 'Company-wide React course',
            period: '2024',
            challenge: 'Frontend developers across teams worked in very different ways.',
            result: 'Designed and ran a React course for all frontend developers: Storybook, TypeScript, i18n, testing and best practices.',
            tags: ['Training', 'React', 'Enablement'],
        },
        {
            title: 'Storybook smoke testing',
            period: '2025',
            challenge: 'UI regressions in the monolith were caught late, by hand.',
            result: 'Smoke tests over every Storybook story in the whole monolith, running in CI.',
            tags: ['Storybook', 'Testing'],
        },
        {
            title: 'Cross-repo end-to-end',
            period: '2025',
            challenge: 'Changes in micro-frontends were never tested against the monolith’s end-to-end suite.',
            result: 'A setup that runs the monolith’s e2e tests from micro-frontend and monorepo pipelines.',
            tags: ['E2E', 'Pipelines'],
        },
    ],
    roles: [
        {
            company: 'Tripletex',
            location: 'Oslo',
            title: 'Developer, Platform Frontend',
            period: '2026 — now',
            summary: 'Owns the frontend baseline for a monolith and a 29-app, 15-package monorepo: dependencies, security, lint and type rules, and a stable continuously deployed pipeline.',
        },
        {
            company: 'Tripletex',
            location: 'Oslo',
            title: 'Tech Lead, Bank',
            period: '2023 — 2026',
            summary: 'Led the rework of legacy JSP into React and Java. Aligned product on tech priorities by making effort and impact explicit. Introduced AI in the team with clear guardrails.',
        },
        {
            company: 'Tripletex',
            location: 'Oslo',
            title: 'Developer, Bank',
            period: '2022 — 2023',
            summary: 'React and Java, replacing legacy JSP with maintainable, tested code.',
        },
        {
            company: 'Bouwsoft',
            location: 'Meetkerke, BE',
            title: 'Web App Developer',
            period: '2019 — 2022',
            summary: 'Features and maintenance in an Ionic Angular app.',
        },
        {
            company: 'D’M&S',
            location: 'Bruges, BE',
            title: 'Front-End Developer',
            period: '2018 — 2019',
            summary: 'Drupal 8 theming for client websites.',
        },
        {
            company: 'E-Sign',
            location: 'Ghent, BE',
            title: 'Trainee',
            period: '2018',
            summary: 'Laravel; turning designs into code.',
        },
    ],
    skills: [
        { level: 'Expert', items: ['TypeScript', 'React', 'HTML & CSS', 'GitHub Actions'] },
        { level: 'Daily', items: ['Playwright', 'Storybook', 'Vite', 'Vitest', 'Turborepo'] },
        { level: 'Solid', items: ['Node.js', 'Bun', 'Java', 'Angular'] },
    ],
    education: [
        { school: 'Howest — Devine', degree: 'Bachelor, Digital Design & Development', period: '2015 — 2018' },
        { school: 'KTA Gistel', degree: 'Home automation (Se-n-Se)', period: '2014 — 2015' },
    ],
    languages: ['Dutch — native', 'English — fluent', 'Norwegian — working'],
};
