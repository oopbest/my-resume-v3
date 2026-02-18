import { describe, expect, it } from "vitest";
import { PERSONAL, SOCIAL_LINKS, flipWords } from "./constants";

describe("constants", () => {
  describe("PERSONAL", () => {
    it("has all required personal info fields", () => {
      expect(PERSONAL.name).toBeDefined();
      expect(PERSONAL.email).toBeDefined();
      expect(PERSONAL.phone).toBeDefined();
      expect(PERSONAL.address).toBeDefined();
      expect(PERSONAL.avatarUrl).toBeDefined();
      expect(PERSONAL.birthdate).toBeDefined();
      expect(PERSONAL.careerStartDate).toBeDefined();
      expect(PERSONAL.initials).toBeDefined();
      expect(PERSONAL.projectsCompleted).toBeDefined();
    });

    it("has a valid email format", () => {
      expect(PERSONAL.email).toMatch(/.+@.+\..+/);
    });

    it("has valid date formats for birthdate and careerStartDate", () => {
      expect(new Date(PERSONAL.birthdate).toString()).not.toBe("Invalid Date");
      expect(new Date(PERSONAL.careerStartDate).toString()).not.toBe("Invalid Date");
    });

    it("has a valid avatar URL", () => {
      expect(PERSONAL.avatarUrl).toMatch(/^https?:\/\//);
    });
  });

  describe("SOCIAL_LINKS", () => {
    it("has valid GitHub URL", () => {
      expect(SOCIAL_LINKS.github).toMatch(/^https:\/\/github\.com\//);
    });

    it("has valid LinkedIn URL", () => {
      expect(SOCIAL_LINKS.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//);
    });
  });

  describe("flipWords", () => {
    it("is a non-empty array of strings", () => {
      expect(flipWords).toBeInstanceOf(Array);
      expect(flipWords.length).toBeGreaterThan(0);
      flipWords.forEach((word) => {
        expect(typeof word).toBe("string");
        expect(word.length).toBeGreaterThan(0);
      });
    });
  });
});
