import Skill from "../components/skill";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("SkillSection", () => {
  it("render successfully", () => {
    render(<Skill />);
  });

  it("render correctly", () => {
    render(<Skill />);
    expect(screen.getAllByTestId("skill")).toHaveLength(10);
    expect(screen.getByText("Skill")).toBeInTheDocument();
  });
});
