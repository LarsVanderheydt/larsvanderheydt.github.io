import type { Cv } from './cv';

export const nl: Cv = {
    languageName: 'Nederlands',
    labels: {
        skipLink: 'Naar de inhoud',
        introduction: 'Introductie',
        sections: 'Secties',
        focusAreas: 'Focusgebieden',
        topics: 'Onderwerpen',
        education: 'Opleiding',
        languages: 'Talen',
        darkMode: 'Donkere modus',
        lightMode: 'Lichte modus',
    },
    sections: {
        work: { nav: 'Realisaties', title: 'Realisaties' },
        experience: { nav: 'Werkervaring', title: 'Werkervaring' },
        ai: { nav: 'AI', title: 'Hoe ik met AI werk' },
        skills: { nav: 'Vaardigheden', title: 'Vaardigheden' },
    },
    name: 'Lars Vanderheydt',
    role: 'Frontend Platform Engineer',
    location: 'Oslo, Noorwegen',
    pitch: 'Ik maak grote frontend-codebases veiliger en prettiger om in te werken, zodat productteams sneller opleveren, met minder verrassingen.',
    intro: 'Acht jaar bouwen voor het web, de laatste vier bij Tripletex, waar ik in 2023 van developer tech lead werd. Eerst voor het bankteam, nu in een platformteam waar iedereen tech lead is. Daar leg ik de basis voor de frontend: gedeelde configuratie, pipelines en tests.',
    email: 'lars.vanderheydt@hotmail.com',
    links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lars-vanderheydt/' },
        { label: 'GitHub', href: 'https://github.com/LarsVanderheydt' },
    ],
    focus: [
        {
            title: 'Frontend-platform',
            body: 'Monorepos, gedeelde configuratie en één pipeline waar elk team op kan rekenen.',
        },
        {
            title: 'Kwaliteit op tempo',
            body: 'Snelle, deterministische tests en CI die problemen opvangt vóór de review.',
        },
        {
            title: 'AI met zorgvuldigheid',
            body: 'AI gebruiken om sneller te werken, terwijl ik de controle over mijn werk houd.',
        },
    ],
    work: [
        {
            title: 'Eén frontend-monorepo',
            period: '2024–2026',
            summary:
                'De overstap van elke micro-frontend naar één monorepo voorgesteld, goedgekeurd gekregen en mee opgeleverd, vóór een deadline die werd vervroegd.',
            details: [
                'Het probleem voorgelegd aan het CTO-panel: aparte pipelines per team, dubbele configuratie, uiteenlopende versies en dezelfde fix in elke repo. Goedgekeurd.',
                'Bewust klein gehouden: geen big bang, team per team, eerst de snelle winsten.',
                '25 apps en 14 packages gemigreerd met hun git-geschiedenis; negen migraties deed ik zelf, de grootste met meer dan 1.400 bestanden.',
                'Het management vervroegde de deadline met een volledig kwartaal, en we haalden hem.',
                'Daarvoor: één gedeelde configuratiebibliotheek voor TypeScript, Vite, Vitest, ESLint en Playwright waarop elke micro-frontend voortbouwde, in 11 releases met versienummer.',
                'Daarna: packages voor ESLint, Prettier, TypeScript, Storybook en Stylelint, gebruikt door elke app, met wekelijks gereviewde dependency-updates.',
            ],
            tags: ['Monorepo', 'pnpm', 'Turborepo', 'Tooling'],
        },
        {
            title: 'Eén pipeline voor elke app',
            period: '2026',
            summary:
                'Workflows per team vervangen door één gedeelde PR- en productiepipeline. Een nieuwe app toevoegen is nu een registratie, geen project.',
            details: [
                'Elke PR: lint, stylelint, Storybook-build, unit- en browsertests, coverage, een branch-deploy en de getagde end-to-end tests.',
                'Productie deployt alleen wat een merge veranderde en meldt dat automatisch aan Slack.',
                'Zeven productieworkflows per app geschrapt; deploymeldingen zeggen nu precies wat er live ging.',
                'Eén PR-label start een testomgeving met de build van die PR.',
            ],
            tags: ['GitHub Actions', 'CI/CD', 'DX'],
        },
        {
            title: 'End-to-end suite twee keer zo snel',
            period: '2026',
            summary:
                'De Playwright-suite van de hoofdapp van traag en onbetrouwbaar naar snel en saai gebracht, zonder tests te schrappen.',
            details: [
                'Mediane looptijd op main van 6,6 naar 3,6 minuten.',
                'Overgeslagen tests van 36 naar 9; de rest gerepareerd en weer aangezet.',
                'Native locators en wachten op de toestand van de pagina in plaats van eigen wrappers en timeouts.',
                'Traces van main gepubliceerd, zodat iedereen eerst het bewijs bekijkt in plaats van naar een fix te gokken.',
            ],
            tags: ['Playwright', 'Testing', 'CI'],
        },
        {
            title: 'Een AI-engineeringcrew',
            period: '2026–nu',
            summary:
                'Een persoonlijke Claude Code-setup die reviews van dependency-updates en fixes voor flaky tests voorbereidt op basis van hun traces. Ik review, beslis en merge.',
            details: [
                'Aparte agents voor planning, implementatie en testen, gehouden aan dezelfde lint-, type- en testregels als mijn eigen code.',
                'Vertrekt van bewijs (de Playwright-trace, de changelog, het echte gebruik), niet van een gok.',
                'Gemergde end-to-end test-PR’s gingen van ongeveer 20 per maand naar 63 in oktober.',
                'Elke run laat een retrospectieve achter die de volgende beter maakt.',
            ],
            tags: ['Claude Code', 'Agents', 'Automatisering'],
        },
        {
            title: 'Deterministisch testen van bankkoppelingen',
            period: '2024–2025',
            summary:
                'Elke bank-API waarmee het product praat gemockt, zodat betalingen end-to-end getest kunnen worden op elke machine en in CI.',
            details: [
                'Mocks per bank, betaalprovider, betalingen in vreemde munt en bankreconciliatie, in één Docker-image.',
                'Speciale betalingsreferenties bepalen de uitkomst, geboekt of geweigerd, zodat tests nooit falen door een sandbox.',
                'De end-to-end suite van de hoofdapp draait tegen elke micro-frontend-branch, met de volledige stack in Docker.',
            ],
            tags: ['Mocking', 'Docker', 'E2E'],
        },
        {
            title: 'Lesgeven en aanwerven',
            period: '2024–2025',
            summary:
                'Een tweedaagse frontendcursus mee opgezet en gegeven voor developers van verschillende kantoren, en sollicitatiegesprekken gevoerd voor het platformteam.',
            details: [
                'Tien onderwerpen: TypeScript, CSS, React, i18n, data ophalen, Storybook, Playwright, micro-frontends, toegankelijkheid en gedeelde utilities.',
                'Technische interviews voor het frontend-platformteam, met één aanwerving als resultaat.',
            ],
            tags: ['Enablement', 'Mentoring'],
        },
    ],
    ai: {
        intro: 'Ik gebruik Claude Code elke dag om ideeën sneller te verkennen en repetitief werk over te nemen, zodat mijn tijd naar de beslissingen gaat. Wat het oplevert, is mijn werk: ik review het, en ik ben er verantwoordelijk en aanspreekbaar voor.',
        practices: [
            {
                title: 'Ik review mijn eigen werk',
                body: 'Elke wijziging krijgt dezelfde review, of ik ze nu zelf typte of niet. Mijn naam staat erop.',
            },
            {
                title: 'Eerst bewijs, dan een fix',
                body: 'Eerst traces, logs en data. Een voorgestelde diagnose wordt daaraan getoetst, nooit blind vertrouwd.',
            },
            {
                title: 'Een tool, geen vervanging',
                body: 'AI versnelt het werk. Het ontwerp, de afwegingen en het oordeel blijven bij de developer.',
            },
        ],
    },
    roles: [
        {
            company: 'Tripletex',
            location: 'Oslo, Noorwegen',
            title: 'Tech Lead, Platform Frontend',
            period: '2026–nu',
            summary:
                'Tripletex (Visma-groep) is een Noors cloudboekhoudplatform met meer dan 150.000 klanten. Een team van tech leads met gedeeld eigenaarschap over de basis van de frontend: de hoofdapp en een monorepo die intussen gegroeid is tot 29 apps en 15 packages.',
            details: [
                'Dependency- en security-updates, lint- en typeregels, en een stabiele, continu gedeployde pipeline. Geen sprints.',
                'Het frontendgedeelte van de pipeline van de hoofdapp versnellen en frontend-legacy opruimen.',
                'Domeinteams ondersteunen met de gedeelde UI-bibliotheek.',
            ],
        },
        {
            company: 'Tripletex',
            location: 'Oslo, Noorwegen',
            title: 'Tech Lead, Bank',
            period: '2023–2026',
            summary:
                'Tech lead van het bankteam. Leidde de overstap van legacy JSP naar React en Java, gebouwd voor onderhoud op lange termijn.',
            details: [
                'Features toegevoegd aan de PSD2-integratie met ZTL, waaronder het overzetten van automatische betalingen.',
                'Het bestandsgebaseerde Autopay-systeem onderhouden en verder ontwikkeld.',
                'Bankreconciliatie herbouwd op het design system.',
                'De bank-micro-frontend van nul opgezet: build, deploy, linting, Storybook, Playwright en foutafhandeling.',
                'Inspanning en impact zichtbaar gemaakt, zodat product kon beslissen over technische prioriteiten.',
                'AI in het team geïntroduceerd, met duidelijke afspraken.',
            ],
        },
        {
            company: 'Tripletex',
            location: 'Oslo, Noorwegen',
            title: 'Developer, Bank',
            period: '2022–2023',
            summary: 'React en Java, legacy JSP vervangen door onderhoudbare, geteste code.',
            details: [],
        },
        {
            company: 'Bouwsoft',
            location: 'Meetkerke, België',
            title: 'Web App Developer',
            period: '2019–2022',
            summary: 'Features en onderhoud in een Ionic Angular-app.',
            details: [],
        },
        {
            company: 'D’M&S',
            location: 'Brugge, België',
            title: 'Front-End Developer',
            period: '2018–2019',
            summary: 'Drupal 8-theming voor websites van klanten.',
            details: [],
        },
    ],
    skills: [
        { group: 'Kern', items: ['TypeScript', 'React', 'HTML & CSS', 'Toegankelijkheid'] },
        {
            group: 'Platform & kwaliteit',
            items: ['GitHub Actions', 'pnpm & Turborepo', 'Playwright', 'Storybook', 'Vite', 'Vitest'],
        },
        { group: 'AI-ondersteunde engineering', items: ['Claude Code', 'Agents & skills', 'Hooks', 'MCP'] },
        { group: 'Ook', items: ['Java & Spring Boot', 'Docker'] },
    ],
    education: [
        {
            school: 'Howest',
            degree: 'Professionele bachelor Digital Design & Development (Devine)',
            period: '2015–2018',
        },
    ],
    languages: ['Nederlands (moedertaal)', 'Engels (vloeiend)', 'Noors (goede kennis)'],
};
