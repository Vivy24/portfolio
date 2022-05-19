import Contact from "../components/contact";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("contact component", () => {
  it("render successfully", () => {
    render(<Contact />);
  });

  it("render correctly", () => {
    render(<Contact />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getAllByTestId("clink")).toHaveLength(5);

    expect(screen.getAllByTestId("clink")[0]).toHaveAttribute(
      "href",
      "./resume.pdf"
    );
    expect(screen.getAllByTestId("clink")[1]).toHaveAttribute(
      "href",
      "./coverletter.pdf"
    );
    expect(screen.getAllByTestId("clink")[2]).toHaveAttribute(
      "href",
      "https://github.com/Vivy24"
    );
    expect(screen.getAllByTestId("clink")[3]).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/vivyvuong/"
    );
    expect(screen.getAllByTestId("clink")[4]).toHaveAttribute(
      "href",
      "mailto: vngvy48@gmail.com"
    );
  });
});
