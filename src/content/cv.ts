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

export type Cv = {
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

export const cv: Cv = {
    name: 'Lars Vanderheydt',
    role: 'Frontend Platform Engineer',
    location: 'Oslo, Norway',
    pitch: 'I make large frontend codebases faster, safer and easier to work in — for developers and the AI tools they use.',
    intro: 'Eight years building for the web, tech lead since 2023 — first for the bank team, now in a platform team where every member is one. I set the frontend baseline at Tripletex: shared config, pipelines and tests.',
    email: 'lars.vanderheydt@hotmail.com',
    links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lars-vanderheydt/' },
        { label: 'GitHub', href: 'https://github.com/LarsVanderheydt' },
    ],
    focus: [
        { title: 'Frontend platform', body: 'Monorepos, shared config and one pipeline every team can rely on.' },
        { title: 'Quality at speed', body: 'Fast, deterministic tests and CI that catches problems before review.' },
        { title: 'AI with due diligence', body: 'Using AI to move faster while staying in control of my work.' },
    ],
    work: [
        {
            title: 'One frontend monorepo',
            period: '2025 — 2026',
            summary:
                'Proposed, got approval for and helped deliver the move of every micro-frontend into one monorepo — ahead of a deadline that was pulled forward.',
            details: [
                'Pitched the problem to the CTO panel: separate pipelines per team, duplicated config, drifting versions and the same fix made in every repo. Approved.',
                'Scoped it down on purpose: no big bang, one team at a time, short-term wins first.',
                '25 apps and 14 packages migrated with their git history; nine of the migrations were mine, the largest at 1,400+ files.',
                'Deadline moved forward a full quarter by leadership — and met.',
            ],
            tags: ['Monorepo', 'pnpm', 'Turborepo', 'Architecture'],
        },
        {
            title: 'One pipeline for every app',
            period: '2026',
            summary:
                'Replaced per-team workflows with a shared PR and production pipeline. Adding a new app is now a registration, not a project.',
            details: [
                'Every PR: lint, stylelint, Storybook build, unit and browser tests, coverage, a branch deploy and the tagged end-to-end tests.',
                'Production deploys only what a merge changed and reports it to change management automatically.',
                'Seven per-app production workflows deleted; deploy notifications now say exactly what shipped.',
                'One PR label spins up a test instance running that PR’s build.',
            ],
            tags: ['GitHub Actions', 'CI/CD', 'DX'],
        },
        {
            title: 'End-to-end suite twice as fast',
            period: '2026',
            summary:
                'Took the main app’s Playwright suite from slow and flaky to fast and boring — without deleting tests.',
            details: [
                'Median run time on main 6.6 → 3.6 minutes.',
                'Skipped tests 36 → 9; the rest fixed and switched back on.',
                'Native locators and state-based waits instead of custom wrappers and timeouts.',
                'Traces from main published so anyone checks the evidence before guessing at a fix.',
            ],
            tags: ['Playwright', 'Testing', 'CI'],
        },
        {
            title: 'An AI engineering crew',
            period: '2026 — now',
            summary:
                'A personal Claude Code setup that drafts dependency-update reviews and flaky-test fixes from their traces. I review, decide and merge.',
            details: [
                'Separate agents for planning, implementation and testing, held to the same lint, type and test rules as my own code.',
                'Starts from evidence — the Playwright trace, the changelog, the actual usage — not from a guess.',
                'Merged end-to-end fixes went from about 20 a month to 60 in three weeks.',
                'Every run leaves a retrospective that improves the next one.',
            ],
            tags: ['Claude Code', 'Agents', 'Automation'],
        },
        {
            title: 'Shared tooling, then and now',
            period: '2024 — 2026',
            summary:
                'One config library every micro-frontend could extend, later succeeded by the monorepo’s config packages.',
            details: [
                'Shared TypeScript, Vite, Vitest, ESLint and Playwright config, 11 versioned releases.',
                'In the monorepo: ESLint, Prettier, TypeScript, Storybook and Stylelint packages, adopted by every app.',
                'Automated dependency updates reviewed weekly so versions never drift apart again.',
            ],
            tags: ['Tooling', 'Standards'],
        },
        {
            title: 'Deterministic bank testing',
            period: '2024 — 2025',
            summary:
                'Mocked every bank API the product talks to, so payments can be tested end to end on any machine and in CI.',
            details: [
                'Mocks per bank, payment provider, FX payments and reconciliation, in one Docker image.',
                'Special payment references pick the outcome — booked, rejected — so tests never flake on a sandbox.',
                'The main app’s end-to-end suite runs against any micro-frontend branch, full stack in Docker.',
            ],
            tags: ['Mocking', 'Docker', 'E2E'],
        },
        {
            title: 'Teaching and hiring',
            period: '2024 — 2025',
            summary:
                'Co-created and ran a two-day frontend course for developers across offices, and interviewed for the platform team.',
            details: [
                'Ten topics: TypeScript, CSS, React, i18n, data fetching, Storybook, Playwright, micro-frontends, accessibility and shared utilities.',
                'Technical interviews for the frontend platform team, leading to one hire.',
            ],
            tags: ['Enablement', 'Mentoring'],
        },
    ],
    ai: {
        intro: 'I use Claude Code every day to explore ideas faster and take on repetitive work, so my time goes to the decisions. What it produces is my work: I review it, and I am responsible and accountable for it.',
        practices: [
            {
                title: 'I review my own work',
                body: 'Every change gets the same review whether I typed it or not. My name is on it.',
            },
            {
                title: 'Evidence before a fix',
                body: 'Traces, logs and data first. A suggested diagnosis is checked against them, never taken on trust.',
            },
            {
                title: 'A tool, not a replacement',
                body: 'AI speeds up the work. The design, the trade-offs and the judgement stay with the developer.',
            },
        ],
    },
    roles: [
        {
            company: 'Tripletex',
            location: 'Oslo',
            title: 'Tech Lead, Platform Frontend',
            period: '2026 — now',
            summary:
                'A team of tech leads with shared ownership of the frontend baseline: the main app and a 29-app, 15-package monorepo.',
            details: [
                'Dependencies and security updates, lint and type rules, and a stable, continuously deployed pipeline — no sprints.',
                'Speed up the frontend part of the main app’s pipeline and remove frontend legacy.',
                'Support domain teams with the shared UI library.',
            ],
        },
        {
            company: 'Tripletex',
            location: 'Oslo',
            title: 'Tech Lead, Bank',
            period: '2023 — 2026',
            summary:
                'The bank team’s tech lead. Led the move from legacy JSP to React and Java, built for long-term maintenance.',
            details: [
                'Added features to the PSD2 integration with ZTL, including moving automatic payments onto it.',
                'Maintained and moved forward the file-based Autopay system.',
                'Rebuilt bank reconciliation on the design system; customer satisfaction rose from 5.3 to 6.3 out of 7.',
                'Set up the banking micro-frontend from scratch: build, deploy, linting, Storybook, Playwright and error handling.',
                'Made effort and impact explicit so product could decide on tech priorities.',
                'Introduced AI in the team, with guardrails.',
            ],
        },
        {
            company: 'Tripletex',
            location: 'Oslo',
            title: 'Developer, Bank',
            period: '2022 — 2023',
            summary: 'React and Java, replacing legacy JSP with maintainable, tested code.',
            details: [],
        },
        {
            company: 'Bouwsoft',
            location: 'Meetkerke, BE',
            title: 'Web App Developer',
            period: '2019 — 2022',
            summary: 'Features and maintenance in an Ionic Angular app.',
            details: [],
        },
        {
            company: 'D’M&S',
            location: 'Bruges, BE',
            title: 'Front-End Developer',
            period: '2018 — 2019',
            summary: 'Drupal 8 theming for client websites.',
            details: [],
        },
        {
            company: 'E-Sign',
            location: 'Ghent, BE',
            title: 'Trainee',
            period: '2018',
            summary: 'Laravel; turning designs into code.',
            details: [],
        },
    ],
    skills: [
        { group: 'Core', items: ['TypeScript', 'React', 'HTML & CSS', 'Accessibility'] },
        {
            group: 'Platform & quality',
            items: ['GitHub Actions', 'pnpm & Turborepo', 'Playwright', 'Storybook', 'Vite', 'Vitest'],
        },
        { group: 'AI-assisted engineering', items: ['Claude Code', 'Agents & skills', 'Hooks', 'MCP'] },
        { group: 'Also', items: ['Java & Spring Boot', 'Docker'] },
    ],
    education: [{ school: 'Howest', degree: 'Bachelor, Digital Design & Development (Devine)', period: '2015 — 2018' }],
    languages: ['Dutch — native', 'English — fluent', 'Norwegian — working'],
};
