import { describe, expect, it } from 'vitest';

import { cv } from './cv';

const period = /^\d{4}( — (\d{4}|now))?$/;

describe('cv content', () => {
    it('uses unique work titles, since they are React keys and anchors', () => {
        const titles = cv.work.map((w) => w.title);
        expect(new Set(titles).size).toBe(titles.length);
    });

    it('gives every work item something to expand', () => {
        expect(cv.work.filter((w) => w.details.length === 0)).toEqual([]);
    });

    it('writes every period as "YYYY", "YYYY — YYYY" or "YYYY — now"', () => {
        const periods = [...cv.work, ...cv.roles, ...cv.education].map((item) => item.period);
        expect(periods.filter((p) => !period.test(p))).toEqual([]);
    });

    it('links only to https or mailto', () => {
        expect(cv.links.filter((l) => !l.href.startsWith('https://'))).toEqual([]);
        expect(cv.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]+$/);
    });
});
