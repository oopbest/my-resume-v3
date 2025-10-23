import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("renders with default styles and text", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
  });

  it("merges custom class names", () => {
    render(<Button className="custom-class">Press</Button>);

    const button = screen.getByRole("button", { name: /press/i });
    expect(button).toHaveClass("custom-class");
  });
});
