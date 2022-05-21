import About from "../components/About";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("AboutSection", () => {
  it("render successfully", () => {
    render(<About />);
  });

  // display correctly
  it("display correctly", () => {
    render(<About />);

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByAltText("vivyimg")).toBeInTheDocument();
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });

  // readmore button work correctly
});
