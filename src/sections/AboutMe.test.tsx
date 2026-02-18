import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import AboutMe from "./AboutMe";

describe("AboutMe", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-02-18"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the About Me section with correct id", () => {
    render(<AboutMe />);
    const section = document.getElementById("about");
    expect(section).toBeInTheDocument();
  });

  it("displays the Topic title", () => {
    render(<AboutMe />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("displays calculated age dynamically", () => {
    render(<AboutMe />);
    // Born 1988-05-31, on 2026-02-18 = 37 years old
    expect(screen.getByText("37")).toBeInTheDocument();
  });

  it("displays dynamic experience years", () => {
    render(<AboutMe />);
    // Career started 2013-06-01, on 2026-02-18 = 12+
    expect(screen.getByText("12+ Years")).toBeInTheDocument();
  });

  it("displays the avatar with fallback initials", () => {
    render(<AboutMe />);
    // Radix AvatarImage doesn't render <img> in jsdom,
    // so we verify the fallback initials are present
    expect(screen.getByText("SP")).toBeInTheDocument();
  });

  it("displays key sections: Age, Experience, Projects", () => {
    render(<AboutMe />);
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
});
