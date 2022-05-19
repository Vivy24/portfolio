import Project from "../components/project";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("project component", () => {
  it("render successfully", () => {
    render(<Project />);
  });

  it("render correctly", () => {
    render(<Project />);

    expect(screen.getByText("Project")).toBeInTheDocument();
    expect(screen.getAllByTestId("project")).toHaveLength(5);
  });
});
