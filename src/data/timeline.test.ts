import { describe, expect, it, vi } from "vitest";
import { timelineData } from "./timeline";
import { calculateTotalExperience } from "../utils/common.utils";

describe("timelineData", () => {
  it("is a non-empty array", () => {
    expect(timelineData).toBeInstanceOf(Array);
    expect(timelineData.length).toBeGreaterThan(0);
  });

  it("each entry has required fields", () => {
    timelineData.forEach((item) => {
      expect(item.company).toBeDefined();
      expect(typeof item.company).toBe("string");
      expect(item.role).toBeDefined();
      expect(typeof item.role).toBe("string");
      expect(item.period).toBeDefined();
      expect(typeof item.period).toBe("string");
      expect(item.responsibilities).toBeInstanceOf(Array);
      expect(item.keyProjects).toBeInstanceOf(Array);
    });
  });

  it("entries with badge have valid string badges", () => {
    timelineData.forEach((item) => {
      if (item.badge) {
        expect(typeof item.badge).toBe("string");
        expect(item.badge.length).toBeGreaterThan(0);
      }
    });
  });

  it("is ordered by most recent first", () => {
    // First entry should be the current/most recent role
    expect(timelineData[0].period).toContain("Present");
  });

  it("calculates total experience correctly as 13 years", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-28"));
    expect(calculateTotalExperience(timelineData)).toBe(13);
    vi.useRealTimers();
  });
});
