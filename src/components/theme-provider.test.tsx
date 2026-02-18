import { render, screen } from "@testing-library/react";
import { describe, expect, it, beforeEach, vi } from "vitest";
import { ThemeProvider } from "./theme-provider";
import { useTheme } from "./theme-context";

// Mock matchMedia for jsdom
const mockMatchMedia = (matches = false) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
};

// Test component that uses the theme context
function ThemeConsumer() {
  const { theme } = useTheme();
  return <span data-testid="theme-value">{theme}</span>;
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("light", "dark");
    mockMatchMedia(false); // default: prefers light
  });

  it("renders children correctly", () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Hello</div>
      </ThemeProvider>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("defaults to system theme", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-value").textContent).toBe("system");
  });

  it("uses the defaultTheme prop when no localStorage value exists", () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-value").textContent).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("applies dark class to document element when theme is dark", () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.documentElement.classList.contains("light")).toBe(false);
  });

  it("applies light class to document element when theme is light", () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(document.documentElement.classList.contains("light")).toBe(true);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("reads initial theme from localStorage", () => {
    localStorage.setItem("vite-ui-theme", "dark");
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-value").textContent).toBe("dark");
  });

  it("uses custom storageKey for localStorage", () => {
    localStorage.setItem("custom-key", "light");
    render(
      <ThemeProvider storageKey="custom-key">
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-value").textContent).toBe("light");
  });

  it("applies dark class when system prefers dark", () => {
    mockMatchMedia(true); // prefers-color-scheme: dark
    render(
      <ThemeProvider defaultTheme="system">
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("applies light class when system prefers light", () => {
    mockMatchMedia(false); // prefers-color-scheme: light
    render(
      <ThemeProvider defaultTheme="system">
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(document.documentElement.classList.contains("light")).toBe(true);
  });
});
