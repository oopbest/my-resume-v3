import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { calculateAge, calculateExperience } from "./common.utils";

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
