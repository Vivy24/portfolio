import Index from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("testing index page", () => {
  it("render successfully", () => {
    render(<Index />);
  });
  it("render 4 section successfully", () => {
    render(<Index />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Skill")).toBeInTheDocument();
    expect(screen.getByText("Project")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
