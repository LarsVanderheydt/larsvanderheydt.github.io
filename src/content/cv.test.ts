import { describe, expect, it } from 'vitest';

import { cvs } from './cv';
import type { Cv } from './cv';

const period = /^\d{4}(–(\d{4}|now|nu))?$/;
const languages = Object.entries(cvs);

describe.each(languages)('cv content (%s)', (_, cv) => {
    it('uses unique work titles, since they are React keys and anchors', () => {
        const titles = cv.work.map((w) => w.title);
        expect(new Set(titles).size).toBe(titles.length);
    });

    it('gives every work item something to expand', () => {
        expect(cv.work.filter((w) => w.details.length === 0)).toEqual([]);
    });

    it('writes every period as "YYYY", "YYYY–YYYY" or "YYYY–now"', () => {
        const periods = [...cv.work, ...cv.roles, ...cv.education].map((item) => item.period);
        expect(periods.filter((p) => !period.test(p))).toEqual([]);
    });

    it('links only to https or mailto', () => {
        expect(cv.links.filter((l) => !l.href.startsWith('https://'))).toEqual([]);
        expect(cv.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]+$/);
    });

    it('uses no em dashes', () => {
        expect(JSON.stringify(cv)).not.toContain('—');
    });
});

const sameYears = (value: string): string => value.replace('nu', 'now');

const shape = (cv: Cv): unknown => ({
    work: cv.work.map((w) => [sameYears(w.period), w.details.length, w.tags.length]),
    roles: cv.roles.map((r) => [r.company, sameYears(r.period), r.details.length]),
    focus: cv.focus.length,
    practices: cv.ai.practices.length,
    skills: cv.skills.map((s) => s.items.length),
    education: cv.education.length,
    languages: cv.languages.length,
    links: cv.links,
    email: cv.email,
});

// A translation that drifts (an entry added to one language only) fails here instead of on the live site.
describe('translations', () => {
    it('keeps Dutch in step with English', () => {
        expect(shape(cvs.nl)).toEqual(shape(cvs.en));
    });
});
