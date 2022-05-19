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
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("content")).toBeInTheDocument();
    expect(screen.getByTestId("less")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeDefined();
    expect(screen.getByTestId("button")).toHaveTextContent("Read More");

    expect(screen.queryByTestId("more")).toBeNull();
  });

  // readmore button work correctly

  it("read button fired correctly", () => {
    render(<About />);

    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(screen.getByTestId("button")).toHaveTextContent("Read Less");
    expect(screen.getByTestId("more")).toBeInTheDocument();
    expect(screen.queryByTestId("less")).toBeNull();
  });

  it("read less button fired correctly", () => {
    render(<About />);

    expect(screen.getByTestId("button")).toHaveTextContent("Read More");
    expect(screen.getByTestId("less")).toBeInTheDocument();
    expect(screen.queryByTestId("more")).toBeNull();

    const button = screen.getByTestId("button");
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByTestId("button")).toHaveTextContent("Read More");
    expect(screen.getByTestId("less")).toBeInTheDocument();
    expect(screen.queryByTestId("more")).toBeNull();
  });
});
