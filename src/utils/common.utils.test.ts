import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { calculateAge, calculateExperience, parseTimelineDate, calculateTotalExperience } from "./common.utils";
import type { TimelineItem } from "@/types";

describe("calculateAge", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("calculates age correctly when birthday has passed this year", () => {
    vi.setSystemTime(new Date("2026-06-15"));
    expect(calculateAge("1988-05-31")).toBe(38);
  });

  it("calculates age correctly when birthday has not yet passed this year", () => {
    vi.setSystemTime(new Date("2026-03-15"));
    expect(calculateAge("1988-05-31")).toBe(37);
  });

  it("calculates age correctly on exact birthday", () => {
    vi.setSystemTime(new Date("2026-05-31"));
    expect(calculateAge("1988-05-31")).toBe(38);
  });

  it("calculates age correctly for a young person", () => {
    vi.setSystemTime(new Date("2026-01-01"));
    expect(calculateAge("2020-06-15")).toBe(5);
  });
});

describe("calculateExperience", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("calculates experience correctly after full years have passed", () => {
    vi.setSystemTime(new Date("2026-07-01"));
    expect(calculateExperience("2013-06-01")).toBe("13+");
  });

  it("calculates experience correctly before anniversary in current year", () => {
    vi.setSystemTime(new Date("2026-03-15"));
    expect(calculateExperience("2013-06-01")).toBe("12+");
  });

  it("calculates experience correctly on exact anniversary", () => {
    vi.setSystemTime(new Date("2026-06-01"));
    expect(calculateExperience("2013-06-01")).toBe("13+");
  });

  it("returns a string with + suffix", () => {
    vi.setSystemTime(new Date("2026-01-01"));
    const result = calculateExperience("2013-06-01");
    expect(result).toMatch(/^\d+\+$/);
  });
});

describe("parseTimelineDate", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-28"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("parses 'Present' correctly to current date", () => {
    const date = parseTimelineDate("Present");
    expect(date.getFullYear()).toBe(2026);
    expect(date.getMonth()).toBe(5); // 0-indexed, so June is 5
    expect(date.getDate()).toBe(28);
  });

  it("parses dates in 'd Mmm yyyy' format correctly", () => {
    const date1 = parseTimelineDate("2 May 2025");
    expect(date1.getFullYear()).toBe(2025);
    expect(date1.getMonth()).toBe(4); // May is 4
    expect(date1.getDate()).toBe(2);

    const date2 = parseTimelineDate("31 Aug 2017");
    expect(date2.getFullYear()).toBe(2017);
    expect(date2.getMonth()).toBe(7); // Aug is 7
    expect(date2.getDate()).toBe(31);
  });

  it("throws error for invalid dates", () => {
    expect(() => parseTimelineDate("Invalid Date")).toThrow();
  });
});

describe("calculateTotalExperience", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-28"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("calculates total experience from timeline items", () => {
    const sampleTimeline: TimelineItem[] = [
      {
        company: "Company A",
        role: "Developer",
        period: "1 Jun 2013 - 31 Aug 2017", // ~4.25 years
        responsibilities: [],
        keyProjects: []
      },
      {
        company: "Company B",
        role: "Senior Developer",
        period: "1 Sep 2017 - 5 Jan 2025", // ~7.35 years
        responsibilities: [],
        keyProjects: []
      },
      {
        company: "Company C",
        role: "Contractor",
        period: "2 May 2025 - Present", // ~1.15 years
        responsibilities: [],
        keyProjects: []
      }
    ];

    const experience = calculateTotalExperience(sampleTimeline);
    expect(experience).toBe(12);
  });

  it("ignores items with missing or invalid periods", () => {
    const sampleTimeline: TimelineItem[] = [
      {
        company: "Company A",
        role: "Developer",
        period: "",
        responsibilities: [],
        keyProjects: []
      },
      {
        company: "Company B",
        role: "Senior Developer",
        period: "invalid-period",
        responsibilities: [],
        keyProjects: []
      }
    ];

    const experience = calculateTotalExperience(sampleTimeline);
    expect(experience).toBe(0);
  });
});

